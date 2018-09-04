export type HomeAction = {
  worldList: string[],
  type: string
};

export type HomeState = {
  worldList: string[],
  categoryList: string[]
};

export type HomeProps = {
};

export type WorldsResponse = {
  responseData: any[]
}