To load pizza webpage, go to frontend-nanodegree-mobile-portfolio/views and load pizza.html to run.
What you should expect to see is a consistent 60 fps while browsing the webpage.

Optimizations:

1.	Inlined style.css into pizza.html to reduce scripting time

2.	In 'for loops', document calls have been pulled from them and reinserted in front to save scripting time

3.	In function 'updatePositions':
	- 	On calling updatePositions, type is passed where the first time invoked on refresh/load of webpage
		sets the scrollTop value to zero, bypassing having to read it

	-	On moving pizzas, there are five constant values each time so array is used to store the values,
		so scrollTop in updatePositions is only used once at most in the function

	-	To move the pizzas left/right, style.left has been replaced with style.transform = "translateX".
		This is better for it avoids a style change and thus layout

4.	When updatePositions is called, it is inside function requestAnimationFrame

5.	In document.addEventListener 'DOMContentLoaded', reduced from 200 pizzas to only visible pizzas on screen
	to save scripting time.