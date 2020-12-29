# redux-modal-hoc-example

Еhis react high-order-component will help you to simplify modal window management in your project.

- enhancers/ConfirmModalHOC - Confirmation window controller
- enhancers/ModalsConnect - connect to modals reducer
- enhancers/ModalsHOC - Any modal window controller

## ConfirmModal

This is an example of how you can implement a stylized confirmation window.
The component consists of 2 parts:

- components/ConfirmModalView - visual presentation
- enhancers/ConfirmModalHOC - controller based on ModalsHOC, provides a method to call a confirmation window
