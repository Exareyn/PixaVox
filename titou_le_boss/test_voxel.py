from mpl_toolkits.mplot3d import Axes3D
import numpy as np
import matplotlib.pyplot as plt
N1 = 10
N2 = 10
N3 = 10
# ma = np.random.choice([0,1], size=(N1,N2,N3), p=[0.99, 0.01])
ma = np.zeros((10,10,10))

for i in range(10):
    for j in range(10):
        for k in range(10):
            status = True
            if (k == 0 and i == 0 and j != 0) or (k != 0 and i == 0 and j == 0) or (k == 0 and i != 0 and j == 0) or (k == 0 and i == 0 and j == 0):
                status = False
                pass
            if (k == 9 and i == 9 and j != 9) or (k != 9 and i == 9 and j == 9) or (k == 9 and i != 9 and j == 9) or (k == 9 and i == 9 and j == 9):
                status = False
                pass
            if status:
                ma[i, j, k] = True
                print(f"[{i}, {j}, {k}]")

# print(ma)
fig = plt.figure()
ax = fig.add_subplot(projection='3d')
ax.set_aspect('equal')

ax.voxels(ma, edgecolor="k")

ax.set_xlim([0,10])
ax.set_ylim([0,10])
ax.set_zlim([0,10])

plt.show()