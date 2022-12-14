import numpy as np
import open3d as o3d
import matplotlib.pyplot as plt
from plyfile import PlyData, PlyElement
import time

plt.style.use('ggplot')
plt.rcParams['font.family'] = 'sans-serif'
plt.rcParams['font.serif'] = 'Ubuntu'
plt.rcParams['font.monospace'] = 'Ubuntu Mono'
plt.rcParams['font.size'] = 14
plt.rcParams['axes.labelsize'] = 12
plt.rcParams['axes.labelweight'] = 'bold'
plt.rcParams['axes.titlesize'] = 12
plt.rcParams['xtick.labelsize'] = 12
plt.rcParams['ytick.labelsize'] = 12
plt.rcParams['legend.fontsize'] = 12
plt.rcParams['figure.titlesize'] = 12
plt.rcParams['image.cmap'] = 'jet'
plt.rcParams['image.interpolation'] = 'none'
plt.rcParams['figure.figsize'] = (12, 10)
plt.rcParams['axes.grid']=True
plt.rcParams['lines.linewidth'] = 2
plt.rcParams['lines.markersize'] = 8
colors = ['xkcd:pale orange', 'xkcd:sea blue', 'xkcd:pale red', 'xkcd:sage green', 'xkcd:terra cotta', 'xkcd:dull purple', 'xkcd:teal', 'xkcd: goldenrod', 'xkcd:cadet blue',
'xkcd:scarlet']

def sphere(u_sample, v_sample, w_sample, norm_mult):
    """generate a sphere

    Args:
        u_sample (_type_): _description_
        v_sample (_type_): _description_
        w_sample (_type_): _description_
        norm_mult (_type_): _description_

    Returns:
        np.array: np array of points format like this: [(x0, y0, z0), (x1, y1, z1), ...]
    """
    x = []
    y = []
    z = []
    for _ in range(700):
        u = np.random.normal(0, u_sample)
        v = np.random.normal(0, v_sample)
        w = np.random.normal(0, w_sample)
        norm = (u * u + v * v + w * w) ** (0.5)
        xi, yi, zi = u / norm * norm_mult, v / norm * norm_mult, w / norm * norm_mult
        x.append(xi)
        y.append(yi)
        z.append(zi)
    return np.array(list(zip(x, y, z)), dtype=[("x", "f4"), ("y", "f4"), ("z", "f4")])

def get_random_sphere_info():
    zero_ten = np.linspace(1,10,100)
    u, v, w, mult = np.random.choice(zero_ten,4)
    return [u, v, w, mult]

def get_random_sphere():
    u, v, w, mult = get_random_sphere_info()
    s = sphere(u, v, w, mult)
    return s

def generate_new_spheres(num=5):
    """generate new .ply files representing spheres

    Args:
        num (int, optional): number of file to generate when run. Defaults to 5.
    """
    for _ in range(num):
        u, v, w, mult = get_random_sphere_info()
        points = sphere(u, v, w, mult)

        vertex = PlyElement.describe(
            points,
            "vertex",
            comments=["Liste des sommets du mesh"]
        )

        ply_data = PlyData([vertex], text=True)
        ply_data.write(f"sphere-{str(time.time()).replace('.', '-')}.ply")