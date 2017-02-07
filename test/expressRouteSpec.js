const should = require('chai').should(),
assert = require ('chai').assert,
supertest = require('supertest'),
app = require('../bin/www');

var url = supertest('http://localhost:8080');

describe('Testing POST route to add', function(err){
 it('should handle and send the computed info', function(done){
   url
       .post('/Restaurants/add')
       .send({ 'name':'keerthi', 'id':555 })
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         res.text.should.equal('Hello keerthi your id is 555','Values do not match');
         done();
       });

 });
});
describe('Testing DELETE route to delete', function(err){
 it('should handle and send the computed info', function(done){
   url
       .delete('/Restaurants/delete')
       .send({ 'name':'keerthi', 'id':555 })
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         res.text.should.equal('keerthi is deleted');
         done();
       });

 });
});
describe('Testing PUT route to update', function(err){
 it('should handle and send the computed info', function(done){
   url
       .put('/Restaurants/update')
       .send({ 'name':'keerthi', 'id':555, 'comment':'Yummy!' })
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         res.text.should.equal('Yummy!');
         done();
       });

 });
  it('should handle and send the computed info', function(done){
   url
       .put('/Restaurants/update')
       .send({ 'name':'keerthi', 'id':555, 'comment':''})
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         res.text.should.equal('Enter Comments');
         done();
       });

 });
});
describe('Testing get route', function(err){
 it('should handle and send the computed info', function(done){
   url
       .get('/Restaurants/')
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         res.text.should.equal('response from user GET route check');
         done();
       });

 });
});
