---
sidebar_position: 1
---

# Tutorial Intro

Explore the simplicity and power of J3, a framework designed for Jetpack Compose Projects. Unleash the awesomeness of Jetpack Compose with its user-friendly and highly productive declarative UI approach. While Jetpack Compose is incredible, it presents challenges like cumbersome navigation and toast message control through the viewModel. J3 simplifies these tasks, allowing you to effortlessly manage navigation and toast messages, so you can concentrate on enhancing your UI and functionality. Boost your development experience with J3!

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

## UI tasks from VieiwModel is against principles

Yes right, the points mentioned above are just against principles.
Handling UI-related tasks directly in a ViewModel goes against the principles of the MVVM (Model-View-ViewModel) architecture, where the ViewModel is responsible for managing the data and business logic, while the UI-related tasks are typically handled by the View (Activity or Fragment).

Let's consider some scenarios:

1. Navigate to a page after receiving response from REST API
2. Showing a toast message if a text field value does not match with local databse data
3. Changing status bar color to red if a fintech app page detects user is in debt
4. Hide keyboard if textfield value matches a data in database
5. and so on...

## Final Talk

We of course need to control/trigger navigation, toast etc from ViewModel but those must to be fulfilled in UI scope. To make this happen the basic mechanism is to have some mutableStateOf in ViewModel and that need need be observed in composable scope and navigation, toast etc need to be executed accordingly.

## J3's role

1. It offers the required mechanism to have the UI tasks' control/trigger in ViewModel and fulfillment provision in composable scope.
2. It decouples UI from ViewModel. With J3 we can use any UI with any ViewModel. UI just don't depend's on or know any ViewModel.
3. Offers simple way to make pixel perfect UI for every device type/size.
4. Provides simple dependency injection. Now, you don't need Dagger or Hilt.