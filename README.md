# Intro
This is a learning project to create a React NPM package.

What's implemented: A basic modal.

# How to Use
- `npm install react-basic-modal`
- `<Modal text="Modal Main test" isConfirmation={true} confirmationConfirmCallback={foo1} confirmationCancelCallback={foo2} />

# Inspiration
- (React S Alert)[https://github.com/juliancwirko/react-s-alert]
- (React NPM Boilerplate)[https://github.com/juliancwirko/react-npm-boilerplate]

# Improvements
- Support multiple modals by having ID per modal that is saved in Redux store. Use it as a reference to do modal.close(), etc.
- Export styles in the npm package.
