// Node.js is an open-source and cross-platform JavaScript runtime environment. 
// Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. 
// This allows Node.js to be very performant.

// Node.js provides several modules which help in interacting with the local system.
// We'll use Javascript to interact with these modules which in turn have implemented actual interaction process.

// Inorder to use a module, we need to require the module and hold it in a variable. Afterwards, use that variable
// and use various methods implemented in the module.

// FOR NOW, WE'LL FOCUS ON SYNC METHODS which works synchorously. ASYNC METHODS will be used in LATER STAGES!!!

// 1. MODULE : CHILD PROCESS
// let cp = require("child_process");

// METHOD: execSync() takes a terminal cmd as input & exceutes the cmd

// open firefox window and goes to the url
// cp.execSync("open -a firefox https://youtube.com");

// can be used to execute a file from any language
// let output = cp.execSync("node demo.js");
// console.log("Output", output);      // gives output in binary format(return from execSync())
// console.log("Output" + output);     // typecasts binary to string

// ---------------------------------------------------------------------------------------------

// 2. MODULE: OS - to interact with the OS
//               - can help identify platform when platform dependent code is needed

// let os = require('os');

// console.log(os.arch());      // returns the operating system CPU architecture
// console.log(os.platform());   // returns a string identifying the operating system platform

// Returns an object containing network interfaces that have been assigned a network address
// console.log(os.networkInterfaces()); 

// Returns an array of objects containing information about each logical CPU core
// console.log(os.cpus());

// ---------------------------------------------------------------------------------------------

// 3. MODULE: FILE SYSTEM - to interact with local file system
                     //   - for now, use sync methods
// let fs = require('fs');

// METHOD: <readFileSync('file path')> - Returns the actual contents of the path in binary buffer format.
// let buffer = fs.readFileSync('demo.js');
// console.log("Content: " + buffer);


// METHOD: <openSync('file path', 'flag')> - creates a new file at input path if not already existing
//                                         - w flag represent write mode
// fs.openSync('demo1.txt', 'w');

// METHOD: <writeFileSync('path', data)>
//          - creates a new file if not already existing
//          - REPLACES its existing content with the data given
// fs.writeFileSync('demo2.txt', 'This is a file created by fs.writeFileSync() for the first time');
// fs.writeFileSync('demo2.txt', 'This is a file created by fs.writeFileSync() for the second time');

// METHOD: <appendFileSync('path', data)>
//          - creates a new file if not already existing
//          - APPENDS the given data to the file
// fs.appendFileSync('demo2.txt', '\nThis is appended using fs.appendFileSync()');

// METHOD: <mkdirSync('path')>
//              - creates a new directory
//              - if directory exists already, throws an error
// fs.mkdirSync('DemoDirectory');
// fs.writeFileSync('DemoDirectory/demo.txt', 'This file is created inside DemoDirectory using writeFileSync()');
// fs.writeFileSync('DemoDirectory/demo1.txt', 'This file is created inside DemoDirectory using writeFileSync()');
// fs.writeFileSync('DemoDirectory/demo2.txt', 'This file is created inside DemoDirectory using writeFileSync()');
// fs.writeFileSync('DemoDirectory/demo3.txt', 'This file is created inside DemoDirectory using writeFileSync()');


// METHOD: <readdirSync('Directory path')>
//              - returns all file names inside directory
// let allFiles = fs.readdirSync('DemoDirectory/');
// console.log(allFiles);

// METHOD: <unlinkSync('path')>
//              - deletes file from the given path
// for(let file in allFiles) {
//     fs.unlinkSync('DemoDirectory/' + allFiles[file]);
//     console.log("File " + allFiles[file] + " is removed!");
// }

// METHOD: <rmdirSync('directory path')>
//              - deletes given directory
// fs.rmdirSync('DemoDirectory');

// NOTE: For deleting a directory and all files inside it -> delete all files first and then delete directory

// METHOD: <existsSync('path')>
//              - returns true/false based on if path exists or not
// console.log(fs.existsSync('demo.js'));
// console.log(fs.existsSync('undemo.js'));

// METHOD: <lstatSync('path')>
//              - returns an object having path details
//              - object can be used to identify if the path is for a file or a directory
//              - .isFile() returns true/false based on if path is of a file or not
//              - .isDirectory() return true/false based on if path is of a directory or not

// console.log(__dirname);     // returns current directory's path
// console.log(__filename);    // // returns current file's path

// let details = fs.lstatSync(__dirname + 'demo.js');
// console.log(details.isFile());
// console.log(details.isDirectory());


// NOTE:    FILES-
//              create: openSync(), writeFileSync(), 
//              create/update: appendFileSync()
//              read: readFileSync
//              delete: unlinkSync
//              exists: existsSync(), 
//              given path is of file: lstatSyncObject.isFile()
//          FOLDERS-
//              create: mkdirSync()
//              read: readdirSync()
//              delete: rmdirSync()
//              exists: existsSync()
//              given path is of directory: lstatSyncObject.isDirectory()


// TASK 1 - 1. create a main folder "Lectures"
//        - 2. create 5 subfolders inside "Lectures" for "Lecture-1" to "Lecture-5"
//        - 3. In each subfolder, create a file with the same name having content "#Readme for Lecture {num}"

// SOLUTION: 
// let mainDirPath = "Lessons";
// fs.mkdirSync(mainDirPath);
// for(let i = 1; i <6; i++) {
//     let subDirPath = mainDirPath + `/Lesson-${i}`;
//     fs.mkdirSync(subDirPath);
//     let subDirFilePath = subDirPath + `/readme-${i}.md`;
//     let content = `# Readme for Lesson-${i}`;
//     fs.writeFileSync(subDirFilePath, content);
// }

// TASK 2 - 1. delete directory "Lectures" and all its subdirectory and files

// SOLUTION:
// let mainDirPath = "Lessons";
// let mainDirAllPaths = fs.readdirSync(mainDirPath);
// for(let i = 0; i < mainDirAllPaths.length; i++) {
//     let subDirPath = mainDirPath + '/' + mainDirAllPaths[i];
//     let subDirAllFilesPath = fs.readdirSync(subDirPath);
//     for(let j = 0; j < subDirAllFilesPath.length;j++) {
//         let filePath = subDirPath + '/' + subDirAllFilesPath[j];
//         fs.unlinkSync(filePath);
//         console.log("File " + filePath + " is removed");
//     }
//     fs.rmdirSync(subDirPath);
//     console.log("Subfolder " + subDirPath + " is removed");
// }
// fs.rmdirSync(mainDirPath);
// console.log("Folder " + mainDirPath + " is removed");

// ---------------------------------------------------------------------------------------------

// 3. MODULE: Path - helps in making paths platform independent
//                 - Mac uses '/' to join paths whereas some other platform can use '\\'
//                 - Path module takes care of all this
//                 - used in conjunction with FILE SYSTEM module

// METHOD: <extname(path)> - returns ext of the file at given path
// METHOD: <join(directory path, filename)> - joins and creates a path for filename which is platform independent
// METHOD: <basename(path)> - returns last portion of the given path

// let path = require('path');
// console.log(path.extname(path.join(__dirname, "demo.js")));
// console.log(path.basename(__dirname));
// console.log(path.basename(path.join(__dirname, "demo.js")));
                    
// ---------------------------------------------------------------------------------------------

// NPM
//      - think of npm as an app store for modules
//      - provides open-sourced as well as private modules
//      - these modules provide a functionality implemented by their authors
//      - use these modules after installing them(same as an app)