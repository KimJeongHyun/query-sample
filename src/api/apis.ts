interface MockReqResObject {
  id: number;
  msg: string;
}

const getSomething = () => {
  return fetch("/something", { method: "GET" });
};

const getTodo = ({ todoId }: { todoId: number }) => {
  return new Promise<MockReqResObject>((resolve) =>
    setTimeout(() => {
      resolve({
        id: todoId,
        msg: `${todoId}번째 할일입니다.`,
      });
    }, 500)
  );
};

const getUserInfo = ({ userId }: { userId: number }) => {
  return new Promise<MockReqResObject>((resolve) =>
    setTimeout(() => {
      resolve({
        id: userId,
        msg: `${userId}번 유저의 정보입니다.`,
      });
    }, 1000)
  );
};

const postTodo = ({ body }: { body: MockReqResObject }) => {
  return new Promise<MockReqResObject>((resolve) =>
    setTimeout(() => {
      resolve({
        ...body,
      });
    }, 1000)
  );
};

export { getTodo, postTodo, getUserInfo };
