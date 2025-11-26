package models

type DeviceTest struct {
	//GORM attributes, see: http://gorm.io/docs/conventions.html
	Type string `json:"type"`
	AtHours int `json:"at_hours" gorm:"primary_key"`
	Passed bool `json:"passed"`
	DeviceWWN string `json:"device_wwn"`
}
