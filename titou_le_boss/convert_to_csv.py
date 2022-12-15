import csv
from plyfile import PlyData as ply
import numpy as np
from os import path
from os import listdir
import os

DATASETPATH = "Mdl_3D"
DATASETDIRS = ["point_cloud"]
FILENAME = "dataset.csv"

def manage_csv(dataset):
    if path.exists(FILENAME):
        file = open(FILENAME, "w")
    else:
        file = open(FILENAME, "x")

    writer = csv.writer(file, delimiter=';', quotechar=';')

    writer.writerow(dataset)

    file.close()

def get_point_cloud():
    fp = DATASETPATH + "car_1.ply"

    """ Take a path as argument and parse the .ply file to get the x,y,z """
    try:
        plydata = ply.read(fp)
    except:
        print('FileError: bad format file')
        raise SystemExit
    arr_data = np.array(plydata['vertex'].data)
    arr_list = [list(t) for t in arr_data]
    arr_list = [xyz[:3] for xyz in arr_list]
    arr_list = [tuple(l) for l in arr_list]
    arr_vertex = np.zeros(len(arr_list))
    arr_vertex = arr_list
    print(arr_vertex[0])
    manage_csv(arr_vertex)

def go_through_dataset(dir):
    for file in listdir(dir):
        if path.isfile(path.join(dir + '/' + file)) and file.endswith(".ply"):
            print(file)

def go_through_dir():
    for entry in listdir(DATASETPATH):
        if path.isdir(path.join(DATASETPATH + '/' + entry)):
            go_through_dataset(path.join(DATASETPATH + '/' + entry))

def main():
    go_through_dir()

if __name__ == "__main__":
    main()