![FridgyApp-Logo](https://user-images.githubusercontent.com/83118705/124954385-e79db080-e00d-11eb-96d1-9e92be838144.jpg)


# Fridgy App
Fridgy App is an API that serves as a time-management application. 
# Installation
Don't forget to install all dependencies of this api, just write this on your CLI or BASH ```$npm i``` 

## EndPoints

## Authentication
| METHOD |ENDPOINT|TOKEN|DESCRIPTION|RETURNS|
|--------|--------|-----|-----------|-------|
|POST|/auth/login|No|create user| token's user|
|POST|/auth/signup|No|User should be able to signUp| New user created|

## User
| METHOD |ENDPOINT|TOKEN|DESCRIPTION|RETURNS|
|--------|--------|-----|-----------|-------|
|GET|/user|Yes|User should be able to see user profile|user's info|
|PUT|/user/|Yes|User should be able to update its own profile |the updated user|
|DELETE|/user/|Yes|User should be able to delete a user|a message with the confirmation and logout|

## Group
| METHOD |ENDPOINT|TOKEN|DESCRIPTION|RETURNS|
|--------|--------|-----|-----------|-------|
|GET|/groups|Yes|User should be able to see all user's group|all the group from a user|
|GET|/groups/:groupId|Yes|User should be able to see a specific group|a especific group from a user|
|POST|/groups|Yes|User should be able to create a new group|a new group|
|PUT|/groups/:groupId|Yes|User should be able to update a group |the updated group|
|DELETE|/groups/:groupId|Yes|User should be able to delete a group|a message with the delete confirmation|

## Events
| METHOD |ENDPOINT|TOKEN|DESCRIPTION|RETURNS|
|--------|--------|-----|-----------|-------|
|GET|/groups/:groupId/events|Yes|User should be able to see all user's events|all the events from the calendar|
|GET|/groups/:groupId/events/:eventsId|Yes|User should be able to see a specific user event| Specific event from the user|
|GET|/groups/:groupId/events?name=|Yes|User should be able to filter all user's events by name |all the events by name from a calendar|
|POST|/groups/:groupId/events|Yes|User should be able to add a user's events|Add user event to the calendar|
|PUT|/groups/:groupId/events/:eventsId|Yes|User should be able to update an event|Updated event|
|DELETE|/groups/:groupId/events/:eventsId|Yes|User should be able to delete an event|message with the deleted event confirmation|


## Shopping List
| METHOD |ENDPOINT|TOKEN|DESCRIPTION|RETURNS|
|--------|--------|-----|-----------|-------|
|GET|/groups/:groupId/shoppinglist|Yes|User should be able to see user's shopping list| Shopping list from group|
|POST|/groups/:groupId/shoppinglist/:productId|Yes|User should be able to add a product to the list|Add product to the list|
|PUT|/groups/:groupId/shoppinglist/:productId|Yes|User should be able to update a product from the shopping list | Updated product list|

## Products
| METHOD |ENDPOINT|TOKEN|DESCRIPTION|RETURNS|
|--------|--------|-----|-----------|-------|
|GET|/groups/:groupId/products/?name=|Yes|User should be able to filter/search a product by name or by category | Products by name or category|
|POST|/groups/:groupId/products/|Yes|User should be able to add a product to the product collection|Add product to product collection|

## Post-Note
| METHOD |ENDPOINT|TOKEN|DESCRIPTION|RETURNS|
|--------|--------|-----|-----------|-------|
|GET|/groups/:groupId/post_note|Yes|User should be able to see/read user's post-note| Post-note from group|
|POST|/groups/:groupId/post_note|Yes|User should be able to create user's post-note| Post-note from group created|
|PUT|/groups/:groupId/post_note/:post_noteId|Yes|User should be able to update/modify user's post-note| Post-note from group modified|
|DELETE|/groups/:groupId/post_note/:post_noteId|Yes|User should be able to delete user's post-note| Post-note from group deleted|



