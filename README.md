# AskHelloWorld
Author: Matt Reynolds (matt@mtnlabs.com) and Justin Degonda (jmdegonda@gmail.com)

Project: AskHelloWorld

Description: An Amazon Alexa Skill for the humble developer.

Version: 1.0.0

URL: https://github.com/msreynolds/askHelloWorld

Usage:
```
echo user: "Alexa, ask hello world Do you know what sound a cow makes?
Alexa: "A cow says moo"
```

Instructions:

Prepare your own source code to upload to the Amazon Lambda Function console:

Get the codez, cd into project directory
```
git clone https://github.com/msreynolds/askHelloWorld.git
cd askHelloWorld
```

Rename ```./.env.example``` to ```./.env```

Edit all configuration variables in ```./.env```
```
# Skill Call Sign
SKILL_CALL_SIGN="hello world"
```

Build the zip file you will upload to Amazon Lambda Function Console, the zip file is stored in ```./dist/askIndigo.zip```:

```
chmod 775 ./build.sh
./build.sh
```