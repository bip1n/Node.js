import chalk from "chalk";
import validator from "validator";

const res = validator.isEmail("hellloworld");
if (res == 1){
    console.log(chalk.green.inverse(res));
}
else{console.log(chalk.red.inverse(res)); }
