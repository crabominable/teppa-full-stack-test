import chai from 'chai';
import chaiHttp from 'chai-http';

import server from '../../server';
import {
  mockNewUserReqData,
  mockNewUserReqWrongEmailData,
  mockNewUserReqWrongPhoneData,
  mockUniqueUserData,
  mockUpdateReqUserData,
  mockUpdatedUserData,
} from '../mocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('User controller', () => {
  describe('POST method /users', () => {
    it('"201" status test', async () => {
      chai.request(server.getApp())
      .post('/users')
      .send(mockNewUserReqData)
      .then((res) => {
        expect(res).to.have.status(201)
      });
    })

    it('"400" status test wrong email', async () => {
      chai.request(server.getApp())
      .post('/users')
      .send(mockNewUserReqWrongEmailData)
      .then((res) => {
        expect(res).to.have.status(400)
      });
    })

    it('"400" status test wrong phone', async () => {
      chai.request(server.getApp())
      .post('/users')
      .send(mockNewUserReqWrongPhoneData)
      .then((res) => {
        expect(res).to.have.status(400)
      });
    })
  })

  describe('GET method /users', () => {
    it('"200" status test', async () => {
      chai.request(server.getApp())
      .post('/users')
      .then((res) => {
        expect(res).to.have.status(200)
      });
    })
  })

  describe('GET method /users/:id', () => {
    it('"200" status test', async () => {
      chai.request(server.getApp())
      .post(`/users/${mockUniqueUserData.id}`)
      .then((res) => {
        expect(res).to.have.status(200)
      });
    })

    it('"404" status test', async () => {
      chai.request(server.getApp())
      .post(`/users/2RSvC3jdjsCsfv6dBbnm`)
      .then((res) => {
        expect(res).to.have.status(404)
      });
    })
  })

  describe('PUT method test', () => {
    it('"200" status test', async () => {
      chai.request(server.getApp())
      .post(`/users/${mockUpdatedUserData.id}`)
      .send(mockUpdateReqUserData)
      .then((res) => {
        expect(res).to.have.status(200)
      });
    })

    it('"404" status test', async () => {
      chai.request(server.getApp())
      .post(`/users/2RSvC3jdjsCsfv6dBb`)
      .send(mockUpdateReqUserData)
      .then((res) => {
        expect(res).to.have.status(404)
      });
    })

    it('"400" status test wrong email', async () => {
      chai.request(server.getApp())
      .post(`/users/${mockUpdatedUserData.id}`)
      .send(mockNewUserReqWrongEmailData)
      .then((res) => {
        expect(res).to.have.status(400)
      });
    })

    it('"400" status test wrong phone', async () => {
      chai.request(server.getApp())
      .post(`/users/${mockUpdatedUserData.id}`)
      .send(mockNewUserReqWrongPhoneData)
      .then((res) => {
        expect(res).to.have.status(400)
      });
    })
  })

  describe('DELETE method test', () => {
    it('"204" status test', async () => {
      chai.request(server.getApp())
      .post(`/users/${mockUpdatedUserData.id}`)
      .then((res) => {
        expect(res).to.have.status(204)
      });
    })

    it('"404" status test', async () => {
      chai.request(server.getApp())
      .post(`/users/2RSvC3jdjsCsfv6dBb`)
      .then((res) => {
        expect(res).to.have.status(404)
      });
    })
  })
})