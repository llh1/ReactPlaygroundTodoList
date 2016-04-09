import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoApp from '../src/todo-app.jsx';


describe("TodoApp", function() {
	var todoAppComponent, header, mainSection, newTodoInput, todoItems, toggleAllCheckbox;

	beforeEach(function() {
		todoAppComponent = TestUtils.renderIntoDocument(<TodoApp />);
		header = TestUtils.findRenderedDOMComponentWithTag(todoAppComponent, "header");
		mainSection = TestUtils.findRenderedDOMComponentWithTag(todoAppComponent, "section");
		newTodoInput = header.getElementsByTagName("input")[0];
		todoItems = mainSection.getElementsByTagName("li");
		toggleAllCheckbox = mainSection.getElementsByClassName("toggle-all")[0];
	});

	describe('when rendering the todo app', function() {
		it("should render the todoapp title", function() {
			var title = header.getElementsByTagName("h1")[0];
			expect(title.textContent).toEqual("TodoApp");
		});
		
		it("should render an input to add new todo item", function() {
			expect(newTodoInput.className).toEqual("new-todo");
			expect(newTodoInput.placeholder).toEqual("What needs to be done?");
		});

		it("should render an empty items list", function() {
			expect(todoItems.length).toEqual(0);
		});

		it("should render an unchecked checkbox to toggle all items", function() {
			expect(toggleAllCheckbox.type).toEqual("checkbox");
			expect(toggleAllCheckbox.checked).toEqual(false);
		});
	});

	describe('when adding a new todo item', function() {
		beforeEach(function() {
			addNewItem("Learn React");
		});

		it('should add a new item in the list after pressing enter', function() {
			expect(todoItems.length).toEqual(1);
		});

		it("should render todo item with a checkbox, a label and a delete button", function() {
			var firstItem = todoItems[0];
			var checkbox = firstItem.getElementsByClassName("toggle")[0];
			expect(checkbox.type).toEqual("checkbox");
			var label = firstItem.getElementsByTagName("label")[0];
			expect(label.textContent).toEqual("Learn React");
			var deleteButton = firstItem.getElementsByTagName("button")[0];
			expect(deleteButton.className).toEqual("destroy");
		});

		it("should reset the new todo input after pressing enter", function() {
			expect(newTodoInput.textContent).toEqual("");
		});
	});

	describe('when the todo list has several items', function() {
		it("should sort the items alphabetically", function() {
			addNewItem("Learn React");
			addNewItem("Do homework");
			addNewItem("Call mum");

			expect(todoItems.length).toEqual(3);
			expect(todoItems[0].textContent).toEqual("Call mum");
			expect(todoItems[1].textContent).toEqual("Do homework");
			expect(todoItems[2].textContent).toEqual("Learn React");
		});
	});

	describe('when completing todo items', function() {
		beforeEach(function() {
			addNewItem("Learn React");
			addNewItem("Do homework");
		});

		it("should mark an item as completed when clicking that item checkbox", function() {
			var firstItem = todoItems[0];
			var firstItemCheckbox = firstItem.getElementsByClassName("toggle")[0];
			toggleItemCompletion(firstItem);

			expect(firstItemCheckbox.checked).toEqual(true);
			expect(firstItem.className).toEqual("completed");
		});

		it("should not check the toggleAllCheckbox if some items are not completed", function() {
			toggleItemCompletion(todoItems[1]);
			expect(toggleAllCheckbox.checked).toEqual(false);
		});

		it("should check the toggleAllCheckbox if all the items are marked as completed", function() {
			toggleItemCompletion(todoItems[0]);
			toggleItemCompletion(todoItems[1]);
			expect(toggleAllCheckbox.checked).toEqual(true);
		});

		it("should uncheck the toggleAllCheckbox if all the items are marked as non completed", function() {
			toggleItemCompletion(todoItems[0]);
			toggleItemCompletion(todoItems[0]);
			expect(toggleAllCheckbox.checked).toEqual(false);
		});

		it("should mark all items as completed when toggleAllCheckbox is checked", function() {
			TestUtils.Simulate.change(toggleAllCheckbox, {target: {checked: true}});
			expect(toggleAllCheckbox.checked).toEqual(true);

			var firstItemCheckbox = todoItems[0].getElementsByClassName("toggle")[0];
			var secondItemCheckbox = todoItems[1].getElementsByClassName("toggle")[0];
			expect(firstItemCheckbox.checked).toEqual(true);
			expect(secondItemCheckbox.checked).toEqual(true);
		});

		it('should mark all items as non completed when toggleAllCheckbox is unchecked', function() {
			toggleItemCompletion(todoItems[1]);
			TestUtils.Simulate.change(toggleAllCheckbox, {target: {checked: false}});
			expect(toggleAllCheckbox.checked).toEqual(false);

			var firstItemCheckbox = todoItems[0].getElementsByClassName("toggle")[0];
			var secondItemCheckbox = todoItems[1].getElementsByClassName("toggle")[0];
			expect(firstItemCheckbox.checked).toEqual(false);
			expect(secondItemCheckbox.checked).toEqual(false);
		});
	});

	describe('when deleting todo items', function() {
		beforeEach(function() {
			addNewItem("Learn React");
			addNewItem("Do homework");
			addNewItem("Call mum");
		});

		it('should remove the item from the list', function() {
			deleteItem(todoItems[0]); // will delete 'Call Mum' because of sorting
			expect(todoItems.length).toEqual(2);
		});

		it("should keep other items sorted alphabetically after deleting an item", function() {
			deleteItem(todoItems[0]);
			var itemText1 = todoItems[0].getElementsByTagName("label")[0];
			var itemText2 = todoItems[1].getElementsByTagName("label")[0];
			expect(itemText1.textContent).toEqual("Do homework");
			expect(itemText2.textContent).toEqual("Learn React");
		});
	});

	function addNewItem(text) {
		TestUtils.Simulate.change(newTodoInput, {target: {value: text}});
		TestUtils.Simulate.keyDown(newTodoInput, {keyCode: 13});
	}

	function toggleItemCompletion(itemNode) {
		var itemCheckbox = itemNode.getElementsByClassName("toggle")[0];
		TestUtils.Simulate.change(itemCheckbox);
	}

	function deleteItem(itemNode) {
		var itemDeleteButton = itemNode.getElementsByClassName("destroy")[0];
		TestUtils.Simulate.click(itemDeleteButton);
	}
});