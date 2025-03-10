import { format } from "date-fns";
import fs from "fs";

const makeFile = () => {
  const today = new Date();
  const filePath = format(today, "yyyy/MM/MMdd");

  fs.writeFileSync(`${filePath}.md`, "", { flag: "a" });

  console.log(`${filePath}.md ファイルを作成しました！`);
};
makeFile();
