# Read the bunny statue point cloud using numpy's loadtxt
import os
import numpy as np
import open3d as o3d


# point_cloud_path = os.path.join('bunny.txt')
point_cloud = np.loadtxt('bunny.txt', delimiter=' ')

# Separate the into points, colors and normals array
points = point_cloud[:,:3]
colors = point_cloud[:,3:6]
normals = point_cloud[:,6:]



######################################
#----------EXPERIMENTING-------------#
######################################

mesh = o3d.io.read_triangle_mesh("models/model_normalized.obj")

pcd = o3d.geometry.PointCloud()
pcd.points = mesh.vertices

# dataset = o3d.data.EaglePointCloud()
# pcd = o3d.io.read_point_cloud(dataset.path)

print(pcd)
print(np.asarray(pcd.points))

######################################
#---------------END------------------#
######################################



# # Initialize a point cloud object
# pcd = o3d.geometry.PointCloud()
# # Add the points, colors and normals as Vectors
# pcd.points = o3d.utility.Vector3dVector(points)
# pcd.colors = o3d.utility.Vector3dVector(colors)
# pcd.normals = o3d.utility.Vector3dVector(normals)

# Create a voxel grid from the point cloud with a voxel_size of 0.01
voxel_grid=o3d.geometry.VoxelGrid.create_from_point_cloud(pcd,voxel_size=0.015)

# Initialize a visualizer object
vis = o3d.visualization.Visualizer()
# Create a window, name it and scale it
vis.create_window(window_name='Visualize', width=1000, height=800)

# Add the voxel grid to the visualizer
vis.add_geometry(voxel_grid)

# We run the visualizater
vis.run()
# Once the visualizer is closed destroy the window and clean up
vis.destroy_window()