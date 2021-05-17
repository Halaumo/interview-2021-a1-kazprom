type getState = typeof import('./redux').store.getState
type dispatch = typeof import('./redux').store.dispatch

declare type RootState = ReturnType<getState>
declare type AppDispatch = dispatch
