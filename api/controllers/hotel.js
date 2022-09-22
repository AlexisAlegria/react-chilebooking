import Hotel from '../models/Hotel.js'

//CREATE
export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(`New Hotel_id: ${savedHotel._id}`)
    } catch (err) {
        next(err)
    }   
}

//UPDATE
export const updatedHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body }, 
            { new: true }
            )
        res.status(200).json(updatedHotel)
    } catch (err) {
        next(err)
    }
}

//DELETE
export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("message: Hotel was deleted successfully")
    } catch (err) {
        next(err)
    }
}

//GET BY ID
export const getByIdHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (err) {
        next(err)
    }
}

//GET ALL
export const getAllHotels = async (req, res, next) => {
    const {min, max, ...others} = req.query
    try {
        const hotels = await Hotel.find({...others,
            cheapestPrice: {$gt:min | 1, $lt: max || 999999}}).limit(req.query.limit)
        res.status(200).json(hotels)
    } catch (err) {
        next(err)
    }
}

//GET BY FILTER
export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}
export const countByType = async (req, res, next) => {
    try {
        const hotelsCount = await Hotel.countDocuments({type: "Hotel"})
        const apartmentsCount = await Hotel.countDocuments({type: "Apartment"})
        const resortsCount = await Hotel.countDocuments({type: "Resort"})
        const villasCount = await Hotel.countDocuments({type: "Villa"})
        const cabinsCount = await Hotel.countDocuments({type: "Cabin"})

        res.status(200).json([
            { type:"hotels", count: hotelsCount },
            { type:"apartments", count: apartmentsCount },
            { type:"resorts", count: resortsCount },
            { type:"villas", count: villasCount },
            { type:"cabins", count: cabinsCount },
        ])
    } catch (err) {
        next(err)
    }
}