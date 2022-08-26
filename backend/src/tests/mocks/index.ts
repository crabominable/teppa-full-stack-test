const mockNewUserReqData = {
  name: 'Joao',
  email: 'joao@email.com',
  phone: '41997405239'
}

const mockNewUserReqWrongEmailData = {
  name: 'Joao',
  email: 'joaoemailcom',
  phone: '41997405239'
}

const mockNewUserReqWrongPhoneData = {
  name: 'Joao',
  email: 'joaoemailcom',
  phone: '419974052'
}

const mockNewCreatedUserData = {
  id: 'JjZyO4xuKX3tWHVxscHE',
  name: 'Joao',
  email: 'joao@email.com',
  phone: '41997405239'
}

const mockAllUserData = [
  {
    id: '2RSvC3jdjsCsfv6dBbnm',
    name: 'Matheus',
    email: 'matheus@email.com',
    phone: '41997402148'
  }, {
    id: '8fHCEO1miS3alzUf7dZu',
    name: 'Pedro',
    email: 'pedro@email.com',
    phone: '41997409848'
  }, {
    id: 'BxQS2Lie1TIUo6Dq8kgx',
    name: 'Lucas',
    email: 'lucas@email.com',
    phone: '41997406958'
  }, {
    id: 'Dmf50PGfzDVqD6D8qWCO',
    name: 'Luiza',
    email: 'luiza@email.com',
    phone: '41997408745'
  }
]

const mockUniqueUserData = {
  id: '2RSvC3jdjsCsfv6dBbnm',
  name: 'Matheus',
  email: 'matheus@email.com',
  phone: '41997402148'
}

const mockUpdateReqUserData = {
  name: 'Matheus',
  email: 'matheus@email.com',
  phone: '41997402148'
}

const mockUpdatedUserData = {
  id: '2RSvC3jdjsCsfv6dBbnm',
  name: 'Matheus',
  email: 'matheuscosta@email.com',
  phone: '41997402148'
}

export {
  mockNewUserReqData,
  mockNewUserReqWrongEmailData,
  mockNewUserReqWrongPhoneData,
  mockNewCreatedUserData,
  mockAllUserData,
  mockUniqueUserData,
  mockUpdateReqUserData,
  mockUpdatedUserData
}