from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
import pandas as pd

df = pd.read_csv("./test.csv")
#print(df.head())
#print(df.shape)
normalizedDf = pd.DataFrame(StandardScaler().fit_transform(df))
print(normalizedDf.head())

pca = PCA(n_components=1)
principalComponents = pca.fit_transform(normalizedDf)
principalDf = pd.DataFrame(data= principalComponents, columns= ['principal_component1', 'principal_component2'])
print(principalDf.head())