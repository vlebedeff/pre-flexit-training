export interface IFeatureSet {
  [featureName: string]: boolean
}

export interface IConfig {
  units?: string;
  currency?: string;
  language?: string;
  features?: IFeatureSet;
}

class Config implements IConfig {
  units = "us"
  currency = "usd"
  language = "en"

  update(newConfig: IConfig) {
    
  }
}

export default new Config()