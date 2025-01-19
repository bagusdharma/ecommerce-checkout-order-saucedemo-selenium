const assert = require('assert');
const http = require('http');

describe('API Testing with Mocha', function() {
  // it('should fetch post data successfully', function(done) {
  //   http.get('http://jsonplaceholder.typicode.com/posts/1', (response) => {
  //     let data = '';

  //     // mengumpulkan semua potongan data menjadi satu string lengkap (data).
  //     response.on('data', (chunk) => data += chunk);

  //     response.on('end', () => {
  //       try {
  //         const jsonData = JSON.parse(data);

  //         assert.strictEqual(response.statusCode, 200);
  //         // console.log('Get data response return 200');
  //         assert.strictEqual(jsonData.id, 1);
  //         assert.strictEqual(jsonData.userId, 1);
  //         // console.log('Get data response return only specific ID and user ID 1');
  //         assert.ok(jsonData.title);
  //         // console.log('Get data response has title');
  //         assert.ok(jsonData.body);
  //         // console.log('Get data response has body');

  //         console.log(jsonData);
  //         done();
  //       } catch (err) {
  //         done(err);
  //       }
  //     });

  //   }).on('error', done);
  // });

  // it('should create post data successfully', function(done) {
  //   const postData = JSON.stringify({
  //     title: 'testing',
  //     body: 'testing',
  //     userId: 1
  //   });

  //   const options = {
  //     method: 'POST',
  //     hostname: 'jsonplaceholder.typicode.com',
  //     path: '/posts',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Content-Length': postData.length
  //     }
  //   };

  //   const req = http.request(options, (response) => {
  //     response.setEncoding('utf8');
  //     let body = '';

  //     response.on('readable', () => {
  //       let chunk;
  //       while ((chunk = response.read()) !== null) {
  //         body += chunk;
  //       }
  //     });

  //     response.on('end', () => {
  //       try {
  //         const jsonData = JSON.parse(body);

  //         assert.strictEqual(response.statusCode, 201);
  //         assert.strictEqual(jsonData.title, 'testing');
  //         assert.strictEqual(jsonData.body, 'testing');
  //         assert.strictEqual(jsonData.userId, 1);

  //         console.log('Post created:', jsonData);
  //         done();
  //       } catch (err) {
  //         done(err);
  //       }
  //     });
  //   });

  //   req.on('error', done);
  //   req.write(postData);
  //   req.end();
  // });

  // it('should update post data successfully', function(done) {
  //   const patchData = JSON.stringify({
  //     title: 'updated title'
  //   });

  //   const options = {
  //     method: 'PATCH',
  //     hostname: 'jsonplaceholder.typicode.com',
  //     path: '/posts/1',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Content-Length': patchData.length
  //     }
  //   };

  //   const req = http.request(options, (response) => {
  //     response.setEncoding('utf8');
  //     let body = '';

  //     response.on('readable', () => {
  //       let chunk;
  //       while ((chunk = response.read()) !== null) {
  //         body += chunk;
  //       }
  //     });

  //     response.on('end', () => {
  //       try {
  //         const jsonData = JSON.parse(body);

  //         assert.strictEqual(response.statusCode, 200);
  //         assert.strictEqual(jsonData.title, 'updated title');

  //         console.log('Post updated:', jsonData);
  //         done();
  //       } catch (err) {
  //         done(err);
  //       }
  //     });
  //   });

  //   req.on('error', done);
  //   req.write(patchData);
  //   req.end();
  // });


    it('should update post data successfully with PUT', function(done) {
        this.timeout(5000);  // Optional: Increase timeout if needed

        // Menggunakan fetch untuk melakukan PUT request
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                title: 'foo',  // Data yang akan diperbarui
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => {
            if (response.status === 200) {
                console.log('Post updated successfully');
                return response.json();  // Mengambil respons JSON jika berhasil
            } else {
                done(new Error('Failed to update post. Status code: ' + response.status));
            }
        })
        .then(data => {
            console.log('Updated post:', data);  // Menampilkan data yang telah diperbarui
            done();  // Tandai tes selesai
        })
        .catch(err => {
            done(err);  // Jika ada error, tandai tes gagal
        });
    });

    it('should patch post data successfully', function(done) {
        this.timeout(5000);  // Optional: Increase timeout if needed

        // Menggunakan fetch untuk melakukan PATCH request
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PATCH',
            body: JSON.stringify({
                title: 'foo',  // Mengirimkan data yang akan diubah
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => {
            if (response.status === 200) {
                console.log('Post updated successfully');
                return response.json();  // Mengambil respons JSON jika berhasil
            } else {
                done(new Error('Failed to update post. Status code: ' + response.status));
            }
        })
        .then(data => {
            console.log('Updated post:', data);  // Menampilkan data yang telah diperbarui
            done();  // Tandai tes selesai
        })
        .catch(err => {
            done(err);  // Jika ada error, tandai tes gagal
        });
    });

    it('should delete post data successfully', function(done) {
        this.timeout(5000);  // Optional: Increase timeout if needed

        // Menggunakan fetch untuk melakukan DELETE request
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
        })
        .then(response => {
            if (response.status === 200) {
                console.log('Post deleted successfully');
                done();  // Tandai tes selesai
            } else {
                done(new Error('Failed to delete post. Status code: ' + response.status));
            }
        })
        .catch(err => {
            done(err);  // Jika ada error, tandai tes gagal
        });
    });

    it('should create post data successfully with POST', function(done) {
      this.timeout(5000);  // Optional: Increase timeout if needed

      // Menggunakan fetch untuk melakukan POST request
      fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
              title: 'foo',  // Data yang akan dikirim
              body: 'bar',
              userId: 1,
          }),
          headers: {
              'Content-type': 'application/json; charset=UTF-8',
          },
      })
      .then(response => {
          if (response.status === 201) {
              console.log('Post created successfully');
              return response.json();  // Mengambil respons JSON jika berhasil
          } else {
              done(new Error('Failed to create post. Status code: ' + response.status));
          }
      })
      .then(data => {
          console.log('Created post:', data);  // Menampilkan data post yang telah dibuat
          done();  // Tandai tes selesai
      })
      .catch(err => {
          done(err);  // Jika ada error, tandai tes gagal
      });
    });

    it('should fetch all post data successfully with GET', function(done) {
      this.timeout(5000);  // Optional: Increase timeout if needed

      // Menggunakan fetch untuk melakukan GET request
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
          if (response.status === 200) {
              console.log('Posts fetched successfully');
              return response.json();  // Mengambil respons JSON jika berhasil
          } else {
              done(new Error('Failed to fetch posts. Status code: ' + response.status));
          }
      })
      .then(data => {
          console.log('Fetched posts:', data);  // Menampilkan data post yang diambil
          done();  // Tandai tes selesai
      })
      .catch(err => {
          done(err);  // Jika ada error, tandai tes gagal
      });
    });

    it('should fetch post data successfully with GET for a specific post ID', function(done) {
      this.timeout(5000);  // Optional: Increase timeout if needed

      // Menggunakan fetch untuk melakukan GET request pada post dengan id 1
      fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
          if (response.status === 200) {
              console.log('Post fetched successfully');
              return response.json();  // Mengambil respons JSON jika berhasil
          } else {
              done(new Error('Failed to fetch post. Status code: ' + response.status));
          }
      })
      .then(data => {
          console.log('Fetched post:', data);  // Menampilkan data post yang diambil
          done();  // Tandai tes selesai
      })
      .catch(err => {
          done(err);  // Jika ada error, tandai tes gagal
      });
    });

});
