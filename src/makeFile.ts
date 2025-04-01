import { format } from "date-fns";
import fs from "fs";

const makeFile = () => {
  const today = new Date();
  const filePath = format(today, "yyyy/MM/");
  const fileName = format(filePath, "MMdd");

  fs.mkdirSync(filePath, { recursive: true });
  fs.writeFileSync(`${filePath}${fileName}.md`, "", { flag: "a" });

  console.log(`${filePath}${fileName}.md ファイルを作成しました！`);
};
makeFile();
