export interface ISerializable<T> {
  serialize(): T;
  deserialize(serializedValue: T): void;
}
