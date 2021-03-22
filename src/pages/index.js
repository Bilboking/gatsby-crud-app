import React from "react"
import firebase from "../components/firebase"
import AddItemForm from '../components/additemform'
import ItemList from '../components/itemlist'

export default () => {
  firebase
    .firestore()
    .collection("items")
    .add({
      name: "Heineken",
      type: "beer",
      qty: 5,
      description:
        "Pale lager beer with 5% alcohol by volume produced by the Dutch brewing company Heineken International",
    })
    .then(ref => {
      console.log("Added document with ID: ", ref.id)
    })

  return (
    <div>
      <h1>Firestore CRUD App </h1>
      <h2>Item List</h2>
      <ItemList />
      <h2>Add Item</h2>
      <AddItemForm />
    </div>
  )
}