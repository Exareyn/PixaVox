import csv
from plyfile import PlyData as ply
import numpy as np
from argparse import ArgumentParser
from os import path
from os import listdir
import os

DATASETPATH = "Mdl_3D"
DATASETDIRS = ["point_cloud"]
FILENAME = "dataset.csv"

def manage_csv(dataset, arg_new):
    if path.exists(FILENAME):
        if arg_new:
            file = open(FILENAME, "w")
            # global status 
            arg_new = False
        else:
            file = open(FILENAME, "a")
    else:
        file = open(FILENAME, "x")

    writer = csv.writer(file, delimiter=';', quotechar=';')

    writer.writerow(dataset)

    file.close()


def get_point_cloud(file, arg_new):

    """ Take a path as argument and parse the .ply file to get the x,y,z """
    try:
        plydata = ply.read(file)
    except:
        print('FileError: bad format file')
        raise SystemExit
    arr_data = np.array(plydata['vertex'].data)
    arr_list = [list(t) for t in arr_data]
    arr_list = [xyz[:3] for xyz in arr_list]
    arr_list = [tuple(l) for l in arr_list]
    arr_vertex = np.zeros(len(arr_list))
    arr_vertex = arr_list
    manage_csv(arr_vertex, arg_new)

def go_through_dataset(dir, arg_new):
    for file in listdir(dir):
        if path.isfile(path.join(dir + '/' + file)) and file.endswith(".ply"):
            print("[LOG] - " + file + ":",end='')
            get_point_cloud(path.join(dir + '/' + file), arg_new)
            print(" Done")

def go_through_dir():
    arg_new = manage_args()
    for entry in listdir(DATASETPATH):
        if path.isdir(path.join(DATASETPATH + '/' + entry)) and entry in DATASETDIRS:
            go_through_dataset(path.join(DATASETPATH + '/' + entry), arg_new)

def manage_args():
    parser = ArgumentParser()
    parser.add_argument('-n', '--new', action='store_true')
    args = parser.parse_args()
    return args.new

def main():
    go_through_dir()

if __name__ == "__main__":
    main()