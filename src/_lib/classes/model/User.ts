export default class Model<INTERFACE> implements <INTERFACE> {
  private id: String;
  
  // Interface fields

  public function getId(): Promise<String> {
    return this.id;
  }

  
}
