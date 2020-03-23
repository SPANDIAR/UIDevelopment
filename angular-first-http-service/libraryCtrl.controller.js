(function() {
  var mod = angular.module("integration");
  mod.controller("libraryCtrl", libraryController);

  function libraryController(loggingSrvc, library, filterFilter) {
    loggingSrvc("libraryController");
    var self = this;
    this.addBookSwitch = false;
    this.isbnId = "";
    this.bookToAddToLibrary = {};
    this.bookAttributes = [];
    this.bookGenre = {};
    this.selectedBookGenres = {};

    this.populateBookAttributes = function() {

      if (this.bookGenre.fiction) {
        this.bookAttributes.push({
          "bookGenre": "Fiction"
        })
      }

      if (this.bookGenre.classic) {
        this.bookAttributes.push({
          "bookGenre": "Classic"
        })
      }

      if (this.bookGenre.romance) {
        this.bookAttributes.push({
          "bookGenre": "Romance"
        })
      }

      if (this.bookGenre.crime) {
        this.bookAttributes.push({
          "bookGenre": "Crime"
        })
      }

      if (this.bookGenre.thriller) {
        this.bookAttributes.push({
          "bookGenre": "Thriller"
        })
      }

      if (this.bookGenre.nonFiction) {
        this.bookAttributes.push({
          "bookGenre": "Non Fiction"
        })
      }

      if (this.bookGenre.science) {
        this.bookAttributes.push({
          "bookGenre": "Science"
        })
      }


      if (this.bookGenre.history) {
        this.bookAttributes.push({
          "bookGenre": "History"
        })
      }

      //console.log("Book Attributes Array " + this.bookAttributes);
    };

    library.getLibraryBooks()
      .then(function(data) {
        self.libraryBooksCollection = data;
      });

    this.onSelectItem = function(chosenRow, book) {
      console.log("Inside onSelectItem. BookId is: " + book.bookId);
      this.chosenRowItem = chosenRow;
      library.getLibraryBook(book.bookId)
        .then(function(data) {
          self.libraryBookDetail = data;
        });
    };

    this.onClickGetISBNDetails = function() {
      loggingSrvc("onGetISBNDetails");
      library.getBookDetailsUsingIsbn(this.isbnId)
        .then(function(response) {
          self.bookDetailFromIsbn = response;
          console.log(self.bookDetailFromIsbn);
        })
    }

    this.onClickAddBook = function() {
      loggingSrvc("onClickAddBook");
      this.addBookSwitch = true;
    }

    this.onClickSubmit = function() {
      loggingSrvc("onClickSubmit");

      /* Populate book details to add to library */

      this.bookToAddToLibrary.bookName = this.bookDetailFromIsbn.book.title;
      this.bookToAddToLibrary.author = this.bookDetailFromIsbn.book.authorDetails.author[0].authorName;
      this.bookToAddToLibrary.language = this.bookDetailFromIsbn.book.language;
      this.bookToAddToLibrary.publisher = this.bookDetailFromIsbn.book.publisher;
      if (this.bookDetailFromIsbn.book.isbn13) {
        this.bookToAddToLibrary.isbn = this.bookDetailFromIsbn.book.isbn13;
      } else {
        this.bookToAddToLibrary.isbn = this.bookDetailFromIsbn.book.isbn;
      }

      this.populateBookAttributes();
      this.bookToAddToLibrary.bookAttributes = this.bookAttributes;
      library.addBookToLibrary(this.bookToAddToLibrary)
        .then(function() {
          self.bookAddSuccess = "Book added successfully";
        },
          function() {
            self.bookAddFailure = "Book could not be added to the library";
          });
    }

    this.onClickCancel = function() {
      loggingSrvc("onClickCancel");
      this.addBookSwitch = false;
    }

    this.onClickClear = function() {
      loggingSrvc("onClickClear");
      this.bookDetailFromIsbn = undefined;
      this.bookAddSuccess = undefined;
      this.bookAddFailure = undefined;
      this.bookGenre = undefined;
      this.isbnId = undefined;
    }
  }
})();
