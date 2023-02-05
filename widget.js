// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: yellow; icon-glyph: magic;
const scriptVersion = 1;
const sourceRepo = "nhoelterhoff/ucb-swim-widget";
const scriptName = "ucb_swim_widget";

let fm = FileManager.iCloud(),
  cachePath = fm.joinPath(fm.documentsDirectory(), "ucbSwimWidgetCache");

if (!fm.fileExists(cachePath)) {
  fm.createDirectory(cachePath);
}

const dateTimeOptions = {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "numeric",
  },
  formatter = new Intl.DateTimeFormat([], dateTimeOptions),
  rowSize = 220;
//   textRowSize = new Size(rowSize, 0);

async function fetchSwimData() {
  const cache_key = "swimData";
  const url = "https://get-swim-schedule-6hoa6yfhea-uw.a.run.app";

  try {
    let req = new Request(url);
    let result = await req.loadJSON();
    writeToCache((key = cache_key), (data = result));
    return result;
  } catch (e) {
    return readFromCache((key = cache_key));
  }
}

async function fetchCalTriLogo() {
  let cache_key = "calTriLogo";

  req = await readFromCache((key = cache_key), (isImage = true));

  if (req) {
    return req;
  } else {
    let req = new Request(
      "https://firebasestorage.googleapis.com/v0/b/ucb-swim-widget.appspot.com/o/logo.png?alt=media&token=66abc2cc-1e29-444a-b1b2-32f6c8bbf755"
    );
    writeToCache(
      (key = cache_key),
      (data = await req.loadImage()),
      (isImage = true)
    );
    return req.loadImage();
  }
}

function horizontalRule(widget) {
  widget.addSpacer(5);

  hr = widget.addStack();
  hr.backgroundColor = Color.lightGray();
  hr.size = new Size(rowSize, 1);

  //   let hr = widget.addStack();
  //   hr.backgroundColor = Color.lightGray();
  //   hr.size = new Size(150, 2);

  widget.addSpacer(4);
}

function displaySessions(stack, data) {
  (fontArticle = Font.semiboldSystemFont(12)),
    (lineLimit = 2),
    (fontCompany = Font.regularRoundedSystemFont(10)),
    (grayAttribution = new Color("#949494"));
  //   let heading = stack.addText("🏊🏻‍♂️ Open Swimming Sessions Today 🏊🏻‍♂️");
  //   heading.centerAlignText();

  // 2023-02-04T00:00:00

  let day = 0;

  if (!data) {
    let entryStack = stack.addStack(),
      textStackLeft = entryStack.addStack();
    textStackLeft.layoutVertically();
    // textStackLeft.size = textRowSize;

    let textTitle = textStackLeft.addText("No data available.");
    textTitle.font = fontArticle;
    textTitle.lineLimit = lineLimit;
  }

  for (ix = 0; ix < data.length; ix++) {
    if (ix > 2) {
      break;
    }

    let event = data[ix]["event"],
      poolName = data[ix]["pool_name"],
      currentDate = new Date(),
      startTime = new Date(data[ix]["start_time"]),
      startTimeStr = startTime.toLocaleString("en-us", dateTimeOptions),
      endTime = new Date(data[ix]["end_time"]),
      endTimeStr = endTime.toLocaleString("en-us", dateTimeOptions);

    if (ix > 0) {
      horizontalRule(stack);
    }

    let entryStack = stack.addStack(),
      textStackLeft = entryStack.addStack();
    textStackLeft.layoutVertically();

    let textTitle = textStackLeft.addText(event);
    textTitle.font = fontArticle;
    textTitle.lineLimit = lineLimit;

    textStackLeft.addSpacer(3);

    console.log("current date: " + currentDate.toLocaleDateString("en-US"));
    console.log("start date: " + startTime.toLocaleDateString("en-US"));

    // create variable that contains tomorrows date
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    console.log("tomorrow: " + startTime.toLocaleDateString("en-US"));

    let weekday = "";

    if (
      currentDate.toLocaleDateString("en-us") !=
      startTime.toLocaleDateString("en-us")
    ) {
      weekday =
        startTime.toLocaleDateString(undefined, { weekday: "short" }) + ", ";
    }

    var lineDetails = textStackLeft.addText(
      weekday + startTimeStr + " - " + endTimeStr + " @ " + poolName
    );

    lineDetails.font = fontCompany;
    lineDetails.lineLimit = lineLimit;
    lineDetails.textColor = grayAttribution;
  }
}

function writeToCache(key, value, isImage = false) {
  const path = fm.joinPath(cachePath, key.replace("/", "-"));
  console.log(`Caching to ${path}...`);

  if (typeof value === "string" || value instanceof String) {
    fm.writeString(path, value);
  } else if (isImage) {
    fm.writeImage(path, value);
  } else {
    fm.writeString(path, JSON.stringify(value));
  }
}

async function readFromCache(key, isImage = false) {
  try {
    const path = fm.joinPath(cachePath, key);
    await fm.downloadFileFromiCloud(path);

    if (isImage) {
      try {
        const image = fm.readImage(path);
        return image;
      } catch (error) {
        return null;
      }
    }

    const value = fm.readString(path);

    try {
      return JSON.parse(value);
    } catch (error) {
      return value;
    }
  } catch (error) {
    return null;
  }
}

async function createWidget() {
  // Create new empty  instance
  let list = new ListWidget();
  list.backgroundColor = new Color("#003262");

  //  get swimming sessions
  sessions = await fetchSwimData();

  let mainStack = list.addStack();
  mainStack.layoutVertically();

  let dataStack = mainStack.addStack();
  dataStack.layoutHorizontally();

  let column1 = dataStack.addStack();
  column1.layoutVertically();

  // Weekday Text
  let currentDate = new Date();
  let row11 = column1.addStack();
  let weekday = row11.addText(
    currentDate.toLocaleDateString("en-us", { weekday: "short" })
  );
  weekday.font = Font.boldSystemFont(20);
  weekday.textColor = new Color("#FDB515");

  // Date
  let row12 = column1.addStack();
  let date = row12.addText("3");
  date.font = Font.boldSystemFont(30);
  date.textColor = new Color("#FFFFFF");

  column1.addSpacer(30);

  // CalTri logo
  let row13 = column1.addStack();
  let calTriLogo = await fetchCalTriLogo();
  let imageRow13 = row13.addImage(calTriLogo);
  imageRow13.imageSize = new Size(40, 40);

  //   Column 2 (spacer)
  let column2 = dataStack.addStack();
  column2.addSpacer(30);

  //   Column 3
  let column3 = dataStack.addStack();
  column3.layoutVertically();
  column3.size = new Size(rowSize, 0);
  column3.topAlignContent();

  displaySessions(column3, sessions);

  return list;
}

async function main() {
  let widget = await createWidget();

  // Check where the script is running
  if (config.runsInWidget) {
    // Runs inside a widget so add it to the homescreen widget
    Script.setWidget(widget);
  } else {
    // Show the medium widget inside the app
    widget.presentMedium();
  }
  Script.complete();
}

module.exports = {
  main,
};
