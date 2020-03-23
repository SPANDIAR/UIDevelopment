(function() {

  const app = angular.module("integration");
  app.service("library", libraryModule);

  function libraryModule($http, loggingSrvc) {
    var self = this;
    self.header = {
      headers: {
        "Accept": "application/json"
      }
    };

    self.getLibraryBooks = function() {
      var promise1 = $http.get("http://sankars-macbook-pro.local:8080/library/books", self.header);
      var promise2 = promise1.then(function(response) {
        return response.data;
      });
      return promise2;
    }

    self.getLibraryBook = function(bookId) {
      var promise1 = $http.get("http://sankars-macbook-pro.local:8080/library/books/" + bookId, self.header);
      var promise2 = promise1.then(function(response) {
        return response.data;
      });
      return promise2;
    }

    self.getBookDetailsUsingIsbn = function(isbnId) {
      console.log("ISBNId is: " + isbnId);
      var promise1 = $http.get("http://sankars-macbook-pro.local:8080/library/books/isbn/" + isbnId, self.header);
      var promise2 = promise1.then(function(response) {
        return response.data;
      });
      return promise2;
    }

    self.addBookToLibrary = function(bookToAddToLibrary) {

      return $http(
        {
          method: 'post',
          url: 'http://sankars-macbook-pro.local:8080/library/books/',
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json"
          },
          data: bookToAddToLibrary,
          timeout: 30000
        }
      ).then(function(response) {
        console.log(response);
      });

    }

  }

})();
