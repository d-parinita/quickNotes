let retriveduid = null;

//get user data

function get_user_data(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const uid = user.uid;
          const email = user.email;
          const name = user.displayName;
          document.getElementById('user-name').innerHTML = name;
          retriveduid = uid;
          getNotes();
        } else {
            window.location.href="../index.html"
        }
      });
}
get_user_data();


//logout

function logout(){
    firebase.auth().signOut().then(() => {
        window.location.href="../index.html"
      }, (error) => {
        showToaster('Logout failed')
      });
}

//toaster msg

function showToaster(msg) {
    document.getElementById("snackbar").innerHTML = msg
    let x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

//Add notes

function addNotes() {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const notes = document.getElementById('notes').value;
    if(!title || !notes || title == '' || notes == ''){
        return showToaster('Please add your note')
    }
    const data = {
        title: title,
        notes: notes,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        uid: retriveduid
    }
    db.collection("notes").add(data)
        .then((docRef) => {
            showToaster('Note added')
            document.getElementById('title').value = ''
            document.getElementById('notes').value = ''
            window.location.reload()
        })
        .catch((error) => {
            showToaster(error.message)
        });
}

//get notes

function getNotes() {
    db.collection("notes")
    .where('uid', '==', retriveduid)
    .get()
    .then((querySnapshot) => {
        let content = ""; // Initialize an empty string for HTML content
        content += `<div class="row">`;
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            content += `<div class='col-lg-3 col-md-3 col-sm-12 mb-3'>`
            content += `<div class='card'>`
            content += `<div class='card-body'>`
            content += `<h5 class='card-title'>${data.title}</h5>`;
            content += `<p class='card-text'>${data.notes}</p>`;
            content += `<div class="action-container pt-3">`
            content += `<button class="btn btn-danger btn-sm rounded" onclick="deleteNote('${doc.id}')">Delete</button>`;
            content += '</div>'
            content += '</div>'
            content += '</div>'
            content += '</div>'
        });
        content += `</div>`;
        const element = document.getElementById("get-notes");
        document.getElementById("notes-loader").style.display = "none"
        element.innerHTML = content;
    })
    .catch((error) => {
        showToaster('Error in getting the notes')
    });
}

//delete note

function deleteNote(id) {
    const result = window.confirm("Are you sure you want to proceed?");
    if (result) {
        db.collection("notes").doc(id).delete().then(() => {
            showToaster("Document successfully deleted!");
            window.location.reload()
        }).catch((error) => {
            showToaster('Error')
        });
    }
}