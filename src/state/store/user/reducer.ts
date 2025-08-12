const initialState: {
   userData: {
      loading: boolean;
      userList: unknown[];
   };
} = {
   userData: {
      loading: true,
      userList: [],
   },
};

const userReducer = (
   state = initialState,
   { type, payload }: Record<string, unknown>,
) => {
   switch (type) {
      default:
         return state;
   }
};

export default userReducer;
