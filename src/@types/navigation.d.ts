export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      new: undefined;
      registered: { inDiet: boolean };
      view: { id: string, date: string };
      edit: { id: string, date: string };
    }
  }
}