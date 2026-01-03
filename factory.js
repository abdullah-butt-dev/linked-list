const Node = (value = null, nextNode = null) => {
  return {
    value,
    nextNode,
  };
};

export const linkedList = () => {
  let head = null;

  const append = (value) => {
    const newNode = Node(value);
    if (head === null) {
      head = newNode;
      return;
    }
    let current = head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  };

  const prepend = (value) => {
    const newNode = Node(value, head);
    head = newNode;
  };

  const size = () => {
    let count = 0;

    let current = head;

    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  };

  const getHead = () => {
    if (!head) {
      return undefined;
    }
    return head.value;
  };

  const getTail = () => {
    if (!head) {
      return undefined;
    }
    let current = head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current.value;
  };

  const pop = () => {
    if (!head) {
      return undefined;
    }

    if (!head.nextNode) {
      const val = head.value;
      head = null;
      return val;
    }

    let current = head;
    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }
    const val = current.nextNode.value;
    current.nextNode = null;
    return val;
  };

  const at = (index) => {
    let i = 0;
    let current = head;
    while (i < index) {
      if (current === null) {
        return undefined;
      }
      current = current.nextNode;
      i++;
    }
    return current.value;
  };

  const contains = (value) => {
    if (!head) {
      return false;
    }
    let current = head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  };

  const findIndex = (value) => {
    let index = 0;
    let current = head;

    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return -1;
  };

  const toString = () => {
    let arr = [];
    if (!head) {
      return "";
    }

    let current = head;

    while (current) {
      arr.push(`( ${current.value} )`);
      current = current.nextNode;
    }
    arr.push("null");

    return arr.join(" -> ");
  };

  const insertAt = (index, ...values) => {
    if (index < 0) {
      throw new RangeError("Index is less than 0");
    }
    let i = 0;
    let prev = null;
    let current = head;
    while (i < index) {
      if (current === null) {
        throw new RangeError("Index exceeds list size");
      }
      prev = current;
      current = current.nextNode;
      i++;
    }

    if (prev === null) {
      const firstNode = Node(values[0], head);
      head = firstNode;
      prev = firstNode;

      for (let j = 1; j < values.length; j++) {
        const newNode = Node(values[j], prev.nextNode);
        prev.nextNode = newNode;
        prev = newNode;
      }
    } else {
      values.forEach((value) => {
        const newNode = Node(value, current);
        prev.nextNode = newNode;
        prev = newNode;
      });
    }
  };

  const removeAt = (index) => {
    if (index < 0) {
      throw new RangeError("Index is less than 0");
    }

    if (index === 0) {
      if (!head) throw new RangeError("Index exceeds list size");
      head = head.nextNode;
      return;
    }

    let i = 0;
    let current = head;
    while (i < index - 1) {
      if (current === null) {
        throw new RangeError("Index exceeds list size");
      }
      current = current.nextNode;
      i++;
    }

    if (!current.nextNode) {
      throw new RangeError("Index exceeds list size");
    }
    current.nextNode = current.nextNode.nextNode;
  };

  return {
    append,
    prepend,
    size,
    getHead,
    getTail,
    pop,
    at,
    contains,
    findIndex,
    toString,
    insertAt,
    removeAt,
  };
};
