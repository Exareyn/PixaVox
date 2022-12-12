from madcad.hashing import PositionMap
from madcad.io import read

import numpy as np
import os
from stl import mesh
from mpl_toolkits import mplot3d
import matplotlib.pyplot as plt
import math

# load the obj file in a madcad Mesh
mymesh = read('300_polygon_sphere.stl')
# choose the cell size of the voxel
size = 1
ma = np.zeros((150,150,150))

voxel = set()    # this is a sparse voxel
hasher = PositionMap(size)   # ugly object creation, just to use one of its methods
for face in mymesh.faces:
    voxel.update(hasher.keysfor(mymesh.facepoints(face)))

# print(len(voxel))

x_points = []
y_points = []
z_points = []
for a in range (len(voxel)):
    # if a % 2 == 0:
    points = voxel.pop()
    # print(points)
    # x_points.append(points[0])
    # y_points.append(points[1])
    # z_points.append(points[2])
    ma[points[0], points[1], points[2]] = True

## plot the voxel
# ax = plt.axes(projection="3d")
# ax.scatter3D(x_points, y_points, z_points)
# plt.xlabel('x')
# plt.ylabel('y')

fig = plt.figure()
ax = fig.add_subplot(projection='3d')
ax.set_aspect('equal')

ax.voxels(ma, edgecolor="k")

ax.set_xlim([0,75])
ax.set_ylim([0,75])
ax.set_zlim([0,75])

plt.show()

# plt.show()

## plot 1 layer of the voxel
# for a in range (len(z_points)):
#     if z_points[a] == 300:
#         plt.scatter(x_points[a],y_points[a])

# plt.show()