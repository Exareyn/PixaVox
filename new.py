import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler
import pandas as pd

df = pd.read_csv('datatry.csv', on_bad_lines='skip')


X = np.array(list(df['label']))
X = X.reshape(1, -1)
X = StandardScaler().fit(X).transform(X)
X = X[:2]
y = df['data']
y = y[:20]
reg = LinearRegression()
reg.fit(X, y)

# 
# with open("res.txt", 'w') as o:
#     o.write(str(reg.predict(1)))