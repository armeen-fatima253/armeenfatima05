#! /usr/bin/env node
import inquirer from "inquirer";
let randomnumber=Math.floor(Math.random()*8*3)

let randnum=5
let ans=await inquirer.prompt(
    [
        {
            name:"ali",
            message:"plz guess a number b/w 1-5",
            type:"number",
        }
    ]
)
if(ans.ali===randnum){
    console.log("congrats u guess a right num!")
}
else{
    console.log("you guessed wrong!")
}