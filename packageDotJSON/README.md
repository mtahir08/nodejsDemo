
## npm init
It will ask you a bunch of questions about your project—project name, author,version—and when it's all done, it will save a new package.json. There's nothing sacred about this generated file; you can change it all you want. But it can save you a bit of time when creating these package.json files.

**Make sure whenever you install any module , install that with --save flag** e.g
``` npm install <package name> --save  ```
 If you left off the --save flag, you'd see the new node_modules folder and it'd have <package> inside, but nothing would be present in your package.json. The reason you want dependencies listed in your package.json is so that someone else can install the dependencies later if you gave them the project—they just have to run npm install with no arguments. Node projects typically have dependencies listed in their package.json but they don't come with the actual dependency files (they don't include the node_modules folder).