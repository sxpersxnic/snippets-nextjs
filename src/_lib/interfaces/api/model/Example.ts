export interface Example {
  id: String;
  type: String | 'example';
  content: {
    header: {
      method: EHttpMethod | 'get';
      metadata: any;
    };
    body: {
      title?: String;
      element: Element;
    };
  };
};
