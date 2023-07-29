export const notesData = JSON.parse(localStorage.getItem("notes")) ?? [];
export const notesReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      const { _id, notes } = payload;
      return state.findIndex(({ _id: search }) => search === _id) !== -1
        ? state.map((videoNote) =>
            videoNote?._id === _id
              ? { ...videoNote, notes: [...videoNote.notes, notes] }
              : videoNote
          )
        : [...state, { _id: payload._id, notes: [payload?.notes] }];
    case "DELETE":
      const workingData = state.find(({ _id }) => _id === payload._id);
      const filteredData = state.filter(({ _id }) => _id !== payload._id);
      const removefromData = workingData?.notes?.filter(
        ({ nID }) => nID !== payload.nID
      );

      return removefromData.length !== 0
        ? [...filteredData, { _id: payload._id, notes: removefromData }]
        : [...filteredData];
        case "UPDATE":
            const searchedData= state.find(({ _id }) => _id === payload._id);
            const filterData = state.filter(({ _id }) => _id !== payload._id);
            const updateData = searchedData?.notes?.map(
              (noteObj) => noteObj?.nID===payload.nID?{...noteObj,note:payload?.note}:noteObj            );
      
            // return removefromData.length !== 0
            //   ? [...filterData, { _id: payload._id, notes: removefromData }]
            //   : [...filteredData];
            return [...filterData,{_id:payload._id,notes:[...updateData]}]
    default:
      return state;
  }
};
