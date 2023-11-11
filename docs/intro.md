---
sidebar_position: 1
---
# Intro

## Welcome to J3 Framework: Elevate Your Jetpack Compose Experience!

Embark on a straightforward journey with J3, a framework crafted for Jetpack Compose Projects. Discover the user-friendly world of Jetpack Compose, where creating intuitive UI meets enhanced productivity. J3 simplifies challenges like navigation and toast message control via ViewModel, allowing you to concentrate on improving your UI and functionality. Elevate your development experience effortlessly with J3!

## Jetpack Compose Challenges

1. Navigation from ViewModel
2. Toast message from ViewModel
3. Status Bar color control from ViewModel
4. Keyboard Control from ViewModel
5. Activity for result from ViewModel
6. Permission management from ViewModel
7. Soft input mode control from ViewModel
8. Decoupling UI/page/screen from ViewModel
9. Making pixel perfect ui

## Rethinking UI Principles

The challenges mentioned above, they go against the principles. In the world of **MVVM** architecture, direct handling of UI-related tasks in a *ViewModel* contradicts the separation of concerns. The *ViewModel* should manage data and business logic, leaving UI-related tasks to the View (*Activity* or *Fragment*).

Let's explore real-world scenarios:

1. Navigate to a page post-REST API response
2. Display a toast message if a text field doesn't match local database data
3. Change the status bar color to red if a fintech app detects the user is in debt
4. Hide the keyboard if a text field value matches a database entry
5. and more...

## Final Talk

We of course need to control/trigger navigation, toast etc from ViewModel but those must to be fulfilled in UI scope. To make this happen the basic mechanism is to have some mutableStateOf in ViewModel and that need need be observed in composable scope and navigation, toast etc need to be executed accordingly.

## **J3's Key Contributions**

1. Empowers *ViewModel* with control over UI tasks, seamlessly integrating with the composable scope.
2. Decouples UI from *ViewModel*, enabling the use of any UI with any *ViewModel*. Your UI remains independent and unaware of *ViewModel* intricacies.
3. Simplifies the creation of pixel-perfect UI for every device type and size.
4. Offers straightforward dependency injection, eliminating the need for Dagger or Hilt.

Elevate your Jetpack Compose experience with **J3** – where simplicity, control, and productivity converge seamlessly!
