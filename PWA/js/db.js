db.enablePersistence().catch(err => {
   if (err.code == 'failed-precondition') {
      // multiple tabs open
      console.log('persistence failed')
   } else if (err.code == 'unimplemented') {
      // browser not supported
      console.log('persistence not available')
   }
})

// real-time listener
db.collection('recipes').onSnapshot(snapshot => {
   //console.log(snapshot.docChanges())
   snapshot.docChanges().forEach(change => {
      //   console.log(change, change.doc.data(), change.doc.id)
      if (change.type === 'added') {
         // add the document data to the web page
         renderRecepy(change.doc.data(), change.doc.id)
      }
      if (change.type === 'removed') {
         // remove the document data from the web page
      }
   })
})
