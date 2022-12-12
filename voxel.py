from mpl_toolkits.mplot3d import Axes3D
import numpy as np
import matplotlib.pyplot as plt
N1 = 10
N2 = 10
N3 = 10
ma = np.random.choice([0,1], size=(N1,N2,N3), p=[0.99, 0.01])

fig = plt.figure()
ax = fig.add_subplot(projection='3d')
ax.set_aspect('equal')
print(ma)

ax.voxels(ma, edgecolor="k")
ax.set_xlim([0,10])
ax.set_ylim([0,10])
ax.set_zlim([0,10])

    
plt.show()
