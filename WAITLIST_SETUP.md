# Waitlist Google Sheets Setup Guide

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "Notate Waitlist"
3. In the first row, add these headers:
   - Column A: `Timestamp`
   - Column B: `Email`
   - Column C: `Count`

## Step 2: Set Up Google Apps Script

1. In your Google Sheet, click **Extensions** > **Apps Script**
2. Delete any existing code and paste the following:

```javascript
// Handle POST requests (add email to waitlist)
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    const email = data.email;

    // Validate email
    if (!email || !isValidEmail(email)) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: "Please provide a valid email address"
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Check if email already exists
    const emailColumn = sheet.getRange("B:B").getValues();
    const emailExists = emailColumn.some(row => row[0] === email);

    if (emailExists) {
      // Get current count
      const lastRow = sheet.getLastRow();
      const currentCount = lastRow > 1 ? sheet.getRange(lastRow, 3).getValue() : 1032;

      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: "This email is already on the waitlist!",
        count: currentCount
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Add new entry (only timestamp and email, let formula calculate count)
    const timestamp = new Date();
    sheet.appendRow([timestamp, email]);

    // Wait a moment for formula to calculate
    SpreadsheetApp.flush();

    // Get the new count from the formula
    const lastRow = sheet.getLastRow();
    const newCount = sheet.getRange(lastRow, 3).getValue();

    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: "Successfully joined the waitlist!",
      count: newCount
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('Error in doPost: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: "An error occurred. Please try again."
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (fetch current count)
function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const lastRow = sheet.getLastRow();
    const currentCount = lastRow > 1 ? sheet.getRange(lastRow, 3).getValue() : 1032;

    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      count: currentCount
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log('Error in doGet: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: "Failed to fetch count"
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Validate email format
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
```

3. Click **Save** (disk icon)
4. Name your project "Waitlist API"

## Step 3: Deploy the Script

1. Click **Deploy** > **New deployment**
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Configure:
   - **Description**: "Waitlist API v1"
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. **IMPORTANT**: You may need to authorize the script:
   - Click "Authorize access"
   - Select your Google account
   - Click "Advanced" if you see a warning
   - Click "Go to Waitlist API (unsafe)" - this is safe, it's your own script
   - Click "Allow"
6. **Copy the Web App URL** - you'll need this! It should end with `/exec`
7. Click **Done**

**If you make changes to the script later:**
1. Go to **Deploy** > **Manage deployments**
2. Click the pencil icon ✏️ to edit
3. Change "Version" to "New version"
4. Click **Deploy**
5. Copy the new URL (it may be the same)

## Step 4: Add Formula to Column C

**Add an ARRAYFORMULA to auto-calculate counts for all rows:**

1. Click on cell **C2** (first data row)
2. Enter this formula:
   ```
   =ARRAYFORMULA(IF(B2:B="","",ROW(B2:B)-1+1031))
   ```
3. Press Enter

**What this does:**
- `ARRAYFORMULA` - Applies formula to all rows automatically
- `IF(B2:B="","",...)` - Only shows count if there's an email
- `ROW(B2:B)-1+1031` - Calculates count based on row number
  - Row 2: 2-1+1031 = **1032**
  - Row 3: 3-1+1031 = **1033**
  - Row 4: 4-1+1031 = **1034**

Your sheet should look like:
```
Row 1: timestamp | email                      | count
Row 2: 12/11/2025| victorzhang0218@gmail.com  | 1032
Row 3: (empty)   | (empty)                    | (empty)
```

**Benefits:**
- Auto-calculates for ALL new rows without manual copying
- Clean, automatic numbering
- One formula manages everything

## Step 5: Configure Your Website

1. In your project, create a `.env.local` file in the `frontend` folder:

```env
NEXT_PUBLIC_WAITLIST_API_URL=your_web_app_url_here
```

2. Replace `your_web_app_url_here` with the URL you copied in Step 3
3. Restart your development server

## Testing

1. Try submitting an email through the waitlist modal
2. Check your Google Sheet - you should see a new row with:
   - Timestamp
   - Email address
   - Count (should be 1033 if starting at 1032)

## Important Notes

- The counter starts at 1032 and increments with each new signup
- Duplicate emails are prevented
- All data is stored in your Google Sheet
- The API is serverless and free through Google Apps Script

## Troubleshooting

### "Failed to fetch" or CORS Error

This is the most common issue. Try these steps in order:

1. **Redeploy with a new version:**
   - In Apps Script, go to **Deploy** > **Manage deployments**
   - Click the pencil icon ✏️ to edit the deployment
   - Under "Version", select **New version**
   - Add description: "Fixed CORS"
   - Click **Deploy**
   - Copy the new Web App URL and update it in `.env.local`
   - Restart your dev server

2. **Check deployment settings:**
   - Go to **Deploy** > **Manage deployments**
   - Verify "Execute as" = **Me**
   - Verify "Who has access" = **Anyone**
   - If not, click the pencil icon, update settings, and deploy new version

3. **Test the URL directly:**
   - Open your Web App URL in a new browser tab
   - You should see: `{"success":true,"count":1033}` (or similar)
   - If you see "Sorry, unable to open the file", the deployment isn't public

4. **Clear browser cache:**
   - Sometimes browsers cache failed CORS requests
   - Open DevTools > Network tab > Right-click > Clear browser cache
   - Hard refresh the page (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### Other Issues

If submissions still aren't working:
1. Make sure the Web App URL is correctly set in `.env.local` and ends with `/exec`
2. Check the formula in Column C is working: Cell C2 should have `=ARRAYFORMULA(IF(B2:B="","",ROW(B2:B)-1+1031))`
3. View the Apps Script logs: In Apps Script, go to **Executions** to see any errors
4. Make sure you authorized the script (Step 3.5)
5. Verify your Next.js dev server restarted after changing `.env.local`
