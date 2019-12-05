/**
 * @Project: FivemTools
 * @Author: Samuelds
 * @License: GNU General Public License v3.0
 * @Source: https://github.com/FivemTools/ft_core
 */

const DrivingStyle = new Enum({
    "None": 0,
    "Normal": 786603,
    "IgnoreLights": 2883621,
    "SometimesOvertakeTraffic": 5,
    "Rushed": 1074528293,
    "AvoidTraffic": 786468,
    "AvoidTrafficExtremely": 6,
    "AvoidHighwaysWhenPossible": 536870912,
    "IgnorePathing": 16777216,
    "IgnoreRoads": 4194304,
    "ShortestPath": 262144,
    "Backwards": 1024
});

const VehicleDrivingFlags = new Enum({
    "None": 0,
    "FollowTraffic": 1,
    "YieldToPeds": 2,
    "AvoidVehicles": 4,
    "AvoidEmptyVehicles": 8,
    "AvoidPeds": 16,
    "AvoidObjects": 32,
    "StopAtTrafficLights": 128,
    "UseBlinkers": 256,
    "AllowGoingWrongWay": 512,
    "Reverse": 1024,
    "AllowMedianCrossing": 262144,
    "DriveBySight": 4194304,
    "IgnorePathFinding": 16777216,
    "TryToAvoidHighways": 536870912,
    "StopAtDestination": 2147483648
});