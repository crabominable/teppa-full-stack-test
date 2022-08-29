interface IUsersState {
  users: []
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  editMode: boolean
  idToBeEdited: number | null
}

export default IUsersState;