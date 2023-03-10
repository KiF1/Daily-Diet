export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      new: undefined;
      registered: { inDiet: boolean };
      view: { id: string };
      edit: { id: string };
    }
  }
}