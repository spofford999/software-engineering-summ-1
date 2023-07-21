# Software Engineering Summative 1 Assignment
### Assignment Aim 🎯
The aim of this assignment is to create a simple web app written in HTML, CSS and JavaScript and to document the full project using a project management tool such as Github. 

To achieve this outcome, many steps were undertaken to replicate a software development project. The flow can be seen in figure 1 and is explained in further detail below.

<br>
<p align="center">
  <img src="https://github.com/spofford999/software-engineering-summ-1/blob/main/images/Flowchart.jpg?raw=true" alt="drawing" width="500"/> <br>
  <em>Figure 1 - Simple flow of the software engineering process</em>
</p>
<br>

Initially, the design concept of the simple app should be sketched / created on a computer to show the desired appearance and potentially some functionality of the idea to help the development teams. Once the design has been decided, a project should be created using a project management tool such as Github or Jira. For this assignment, Github was used as it is free to use. Numerous tickets known as issues are raised by the design team in the project. Each issue/ticket is a specific requirement for the project completion. An example of a ticket could be that the title should be the font Arial, size 24 and centred on the page. 

A development team are then assigned the tickets and as they are completed submitted for approval using a pull request. If approved, then the specific code created for the project gets added to the main code. It is worth noting that some code should also be provided with certain test files, to validate the code is working as stated. 

Once all tickets are approved and the tickets are closed, the main code should contain all the information to provide the desired outcome of the design team. This assignment will work through this methodology to produce the simple web app. 

***Note from the author: The assignment was to show understanding of the whole process and not purely on the level of coding. It was encouraged to have fun with this project, so I hope you enjoy the topic of my simple web app!***
<br>
<br>


## 🍌 Banana For Scale 🍌

### Introduction

To keep the project fun and interesting, I chose to create a simple web app based on a popular internet meme that originated in 2005, known as “Banana for Scale” (Know your meme, 2014). It first originated on a blog called Rockdogdesigns with a description that a TV was for sale. Below is the original post.

<br>
<p align="center">
  <img src="https://github.com/spofford999/software-engineering-summ-1/blob/main/images/Blog%20Post.jpg?raw=true" alt="drawing" width="600"/> <br>
  <em>Figure 2 - The origin of banana for scale</em>
</p>
<br>

It then became a form of joke on the internet as the banana size had no defined length but was being used to compare the size of items from animals to furniture, especially on the popular internet site Reddit, where the topic has its own subreddit for posts specifically dedicated to this topic (https://www.reddit.com/r/BananasForScale/).
<br>
<br>

### Design & Functionality 🎨

As the assignment task was to keep the coding simple, the approach to the web app was to create a simple calculator to take an input of a length or distance and divide by a fixed value specified for the size of the banana size to explain how many bananas were equivalent to the input length. The decided length of a banana was set to 18cm (0.18m).
<br>
<p align="center">
  <img src="https://github.com/spofford999/software-engineering-summ-1/blob/main/images/Flowchart%202.jpg?raw=true"/><br>
  <em>Figure 3 - Simple flowchart of the web app functionality</em>
</p>
<br>

### Prototyping in Figma - Image and Functionality ⚙️

Figure 4 shows the prototyping from basic layout to final appearance created on Figma. The initial wire frame was just to show a rough layout of the key items required based on the above flow chart. The second image adds more clarity to the text that will appear as the web app is used. Finally, the third picture shows the colours and images created for the app as a final proposed design. Playful fonts, colour and images were used based on the light-hearted topic of the app!

<br>
<p align="center">
  <img src="https://github.com/spofford999/software-engineering-summ-1/blob/main/images/Prototype%201.jpg?raw=true" alt="drawing" width="1000"/> <br>
  <em>Figure 4 - Prototyping process</em>
</p>
<br>

Figma was also used to preview some basic functionality of the app. In this prototype, the blue arrow attached to the yellow button "How many bananas?" is connected to a second page with the heading calculation. In the prototype mode, clicking on the yellow button takes the user to this second page, which also produces an output number. This is not a calculation but purely to demonstrate the basic functionality of the app. This prototyping tool was useful as it helped open new ideas and requirements of the design.

<br>
<p align="center">
  <img src="https://github.com/spofford999/software-engineering-summ-1/blob/main/images/Prototype%202.jpg?raw=true" alt="drawing" width="600"/> <br>
  <em>Figure 5 - Prototyping functionality</em>
</p>
<br>

### Agile Project Approach
The approach to this project will be to use Agile methods. It produces parts of the project incrementally, allowing the customer to see the progress quickly. This also allows faster feedback from the customer. As the customer is involved more frequently, there is the opportunity for additional tasks to be added based on developed customer needs during their testing of the software. This flexible approach is specifically associated with agile project management. 
For this project, each activity will be created as an issue on Github, so no tasks are forgotten about. As each issue is submitted for approval, there may be the opportunity for further development which will also be raised as an issue. As the project is short, all the work would be done in a very short period. However, if this project was larger, the aim would be to split this into two sprints. The first to create the functionality of the calculator and all the unit testing to ensure the customer was happy with expected outcome and the functionality of the coding. The second sprint would contain of improving the aesthetics of the page. This may take slightly longer as the customer will likely have more input into this section of project for this specific web app.
The issues will be logged on a kanban board which help the scrum master to understand how the project is progressing and any specific issues can be escalated in the morning team scrum. For this project, as I am the only developer, each issue will be completed one by one. However, if there were a team of more developers, the kanban board would be even more useful to visualise quickly how the teams progress on the project is going.

### Creating a list of issues 📋
A ticketing system was created to list all the features required for the project. The idea is that one ticket / issue is created for each feature required. Each item is then created on a separate branch which is then submitted to Github as a pull request. If the approver approves of the changes and they meet the requirement, then the updated information can be merged to the main code.

### Kanban board at start 🟥🟧🟨🟩
To help visualise the issues, a kanban project board was used to identify the status of the various tasks. The image in figure 6 shows the list of issues in the to-do section. As tasks are progressed, they will move along the kanban headings until they are all in the "Done" section of the board, indicating the project is complete.

<br>
<p align="center">
  <img src="https://github.com/spofford999/software-engineering-summ-1/blob/main/images/Kanban%20start.jpg?raw=true" alt="drawing" width="600"/> <br>
  <em>Figure 6 - Kanban board at the start of the project</em>
</p>
<br>

## Project code and files 💻
To start working through the issues, initially this repository was cloned so it could be opened in VScode. This allowed for file creation, text editing and the de-bugging of code. VScode was used to write all coding elements for this project.

#### Branch - Create HTML & CSS files and explanation of pull requests.
The first issue for the project was to create the html and css file, as shown in Figure 7. Both the html and css file were created on a new branch within VScode called html-css. It was clearly named to help the future approver understand the issue being worked on. If the changes were not made on a new branch and instead on the main branch, there is a risk that there could be a bug in the code which would effect all the main code. By creating a separate branch allows the code to be reviewed before merging the new features to the main code.

<br>
<p align="center">
  <img src="https://github.com/spofford999/software-engineering-summ-1/blob/main/images/Pull%20Request%200.jpg?raw=true" alt="drawing" width="500"/> <br>
  <em>Figure 7 - Pull request for the first issue</em>
</p>
<br>

Once the files were created, they needed to be committed to the repository which creates a pull request. An example of the pull request for this issue can be seen in figure 8. The pull request requires someone to approve the changes and merge them to the main code by merging the pull request. This gives the approver the option to review the changes, and can comment on the change, approve it or request changes if potentially the updates did not meet the criteria of the ticket. Pull requests were used for all changes when committing new code to the repository.

<br>
<p align="center">
  <img src="https://github.com/spofford999/software-engineering-summ-1/blob/main/images/Pull%20Request%201.jpg?raw=true" alt="drawing" width="500"/> <br>
  <img src="https://github.com/spofford999/software-engineering-summ-1/blob/main/images/Pull%20Request%202.jpg?raw=true" alt="drawing" width="500"/> <br>
  <em>Figure 8 - The first issue to be worked on</em>
</p>
<br>

#### Branch - Adding image and headings
The image of the banana and the headings were added to the html code in VScode before being committed to the repository. The position of the images and the text was all controlled in the style.css file. I was happy with how this appeared but would like to understand more about the use of other fonts that can be used. The font for the prototype made in Figma has a more playful approach than the Arial, Helvetica, sans-serif font used in the style.css file, hence why there is slight differences in the text appearance.

<br>
<p align="center">
  <img src="https://github.com/spofford999/software-engineering-summ-1/blob/main/images/Image%20%26%20Heading.jpg?raw=true" alt="drawing" width="500"/> <br>
  <em>Figure 9 - Adding the image and headings</em>
</p>
<br>

#### Branch - Adding the input, button and calculation
Several other small branches were created to add the input box, button, and output box on the html code. A JavaScript file called script.js was created and contained the calculation feature that would divide the input number by 18 to calculate the equivalent length in bananas. As can be seen in figure 10, the calculation feature works but the output number contains decimal places. The task was completed in accordance with the ticket but based on the result, a new ticket was raised to edit the JavaScript code to remove any decimal numbers after the result. Figure 10 shows the stages of the process from initial creation to new issue raised to the code being modified to fit the new ticket criteria.

<br>
<p align="center">
  <img src="https://github.com/spofford999/software-engineering-summ-1/blob/main/images/Number%20error%201.jpg?raw=true" alt="drawing" width="250"/>
  <img src="https://github.com/spofford999/software-engineering-summ-1/blob/main/images/Number%20error%205.jpg?raw=true" alt="drawing" width="500"/>
  <img src="https://github.com/spofford999/software-engineering-summ-1/blob/main/images/Number%20error%202.jpg?raw=true" alt="drawing" width="250"/>
  <em>Figure 10 - The stages to resolve the new issue</em>
</p>
<br>

### Current project status 🟥🟧🟨🟩
At this stage of the project, it is useful to demonstrate how the project is progressing by viewing the kanban board. The issue raised from the previous paragraph is in the "In Review" section waiting for approval and to be merged to the main code. The next task is to create small labels that are placed next to the input and output boxes to add further clarity to the information required. There are also several issues that have not been addressed yet and still required to be completed before the project can be closed.

<br>
<p align="center">
  <img src="https://github.com/spofford999/software-engineering-summ-1/blob/main/images/Kanban%20mid.jpg?raw=true" alt="drawing" width="1000"/> <br>
  <em>Figure 11 - Project status shown on the kanban board</em>
</p>
<br>

#### Branch - Correcting an error if a negative number is entered.
Coincidentally, during manual testing of different numbers, it was identified that if a negative number was entered it would produce a negative result. This is not correct as it is not possible to have a negative distance. Another ticket was raised to correct this error in the JavaScript code. The code was modified in VScode and tested in the live server before committing to the repository on a new branch. Figure 12 shows a useful feature when looking at pull requests as the old code and new code can be seen side by side (or merged) to show the changes made. In this example, the code was updated to contain and if/else statement, where the message "Please enter a positive number!" would show if a negative number was entered into the input box, the result of the code change can be seen in figure 13.

<br>
<p align="center">
  <img src="https://github.com/spofford999/software-engineering-summ-1/blob/main/images/Code%20update.jpg?raw=true" alt="drawing" width="1000"/> <br>
  <em>Figure 12 - Updating javascript code</em>
</p>
<br>

### Final Result 🎨
Figure 13 also shows the final appearance of the web app based on the coding for the visual and functionality. The next step will be to create test programs to validate that the program is working as expected.
The page can also be accessed using this link: https://spofford999.github.io/software-engineering-summ-1/

<br>
<p align="center">
  <img src="https://github.com/spofford999/software-engineering-summ-1/blob/main/images/Number%20error%204.jpg?raw=true" alt="drawing" width="500"/> <br>
  <em>Figure 13 - Negative numbers now show an error message</em>
</p>
<br>


### Unit Testing ⚙️
Throughout this project, manual testing was constantly being used to check functionality of the code. However, it was also important to test the code in JEST to identify if there were any other issues with the code. Three test scenarios were created. The first was called a smoke test which is purely to test that the tester is working. A basic sum of 2+2 was used with an expected outcome of 4. If for any reason the Jest program produced a different result to 4 it would be clearly identified that the testing program was not suitable to use. To test my code, I created two criteria. The first was to check that an inputted length of 18 would return 100 (18/0.18). This worked correctly and when the input value was changed to 17 produced an error, as the answer produced was 94 when it expected 100. To check that negative numbers would not be calculated, another test was created to check if a negative number was entered it would return "Please enter a positive number". This was tested with values of -5 and -10 and both tests successfully passed.

<br>
<p align="center">
  <img src="https://github.com/spofford999/software-engineering-summ-1/blob/main/images/Test%20Pass%20.jpg?raw=true" alt="drawing" width="500"/> <br>
  <img src="https://github.com/spofford999/software-engineering-summ-1/blob/main/images/Test%20Fail.jpg?raw=true" alt="drawing" width="500"/> <br>
  <em>Figure 14 - Testing of the code using Jest</em>
</p>
<br>



### Kanban board at end of project 🟥🟧🟨🟩
The kanban board shows the completion of all tasks to the Done section of the Kanban board. It was a useful tool to track the progress of items to ensure all items were completed for the project.

<br>
<p align="center">
  <img src="https://github.com/spofford999/software-engineering-summ-1/blob/main/images/Kanban%20end.jpg?raw=true" alt="drawing" width="1000"/> <br>
  <em>Figure 15 - Project status shown on the kanban board</em>
</p>
<br>

### Evaluation 💭
I am very pleased with my performance in this project because, prior to this, my experience with HTML and JavaScript was quite limited. One of the things that really helped me throughout the project was creating a list of issues, which allowed me to keep track of all the necessary tasks. This approach helped me stay focused and organised. The use of a kanban system to log task is certainly something I will use in future projects within my workplace.

Working with GitHub and VSCode was an enjoyable experience for me as this was also produced new challenges. Using pull requests was particularly beneficial as it helped me maintain better source control and avoid any potential conflicts with the main code. As I worked on this project on my own, I approved all pull requests. It would have been interesting for someone else to be involved as an approver so add more comments / reject certain changes to create a more accurate real-life scenario.

I did encounter some initial challenges with testing, especially getting the Jest functionality in VSCode to work properly. However, I persevered and eventually managed to create a simple test package with three basic tests to ensure the code's functionality.

Given more time, I would have loved to explore the topic of CSS further and gain a deeper understanding of what modifications could be made to enhance the overall visuals of the project.

In conclusion, this project has been a great learning experience for me. I have learnt about the importance of pull requests to prevent bad code being submitted straight into the main code and how to use agile tools such as a kanban project board. I am proud of the progress I made, especially considering my limited prior knowledge of HTML and JavaScript and feel I adapted well.


### References
Know your meme. (2014). *Banana for Scale*. [Online]. Know your meme. Last Updated: 2021. Available at: https://knowyourmeme.com/memes/banana-for-scale [Accessed 19 July 2023].

