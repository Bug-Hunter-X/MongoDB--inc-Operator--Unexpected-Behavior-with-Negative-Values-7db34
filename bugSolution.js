```javascript
// Solution with validation
db.collection.findOne({name: "John"}, (err, doc) => {
  if (err) {
    console.error(err);
    return;
  }
  if (doc && typeof doc.age === 'number') {
    let newAge = doc.age - 1;
    if (newAge >= 0) {
      db.collection.updateOne({name: "John"}, {$inc: {age: -1}});
    } else {
      console.log("Age cannot be less than zero.");
    }
  } else {
    console.log("Age field not found or not a number.");
  }
});
```