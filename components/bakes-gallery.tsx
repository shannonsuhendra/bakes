"use client"

import { useState, useCallback, useEffect } from "react"
import { Plus, X, ImageIcon, ChevronLeft, ChevronRight, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import useEmblaCarousel from "embla-carousel-react"
import { DEFAULT_BAKE_IMAGE, INITIAL_BAKES, type Bake } from "@/lib/bakes"

interface BakesGalleryProps {
  isAdmin?: boolean
}

export function BakesGallery({ isAdmin = false }: BakesGalleryProps) {
  const [bakes, setBakes] = useState<Bake[]>(INITIAL_BAKES)
  
  const [isOpen, setIsOpen] = useState(false)
  const [newBake, setNewBake] = useState({ name: "", description: "", images: [""] })
  const [selectedBake, setSelectedBake] = useState<Bake | null>(null)
  const [editingBake, setEditingBake] = useState<Bake | null>(null)
  const [isEditOpen, setIsEditOpen] = useState(false)

  const handleAddBake = () => {
    if (newBake.name && newBake.description) {
      const validImages = newBake.images.filter(img => img.trim() !== "")
      setBakes([
        ...bakes,
        {
          id: Date.now().toString(),
          name: newBake.name,
          description: newBake.description,
          images: validImages.length > 0 ? validImages : [DEFAULT_BAKE_IMAGE]
        }
      ])
      setNewBake({ name: "", description: "", images: [""] })
      setIsOpen(false)
    }
  }

  const handleDeleteBake = (id: string) => {
    setBakes(bakes.filter(bake => bake.id !== id))
    setSelectedBake(null)
  }

  const addImageField = () => {
    setNewBake({ ...newBake, images: [...newBake.images, ""] })
  }

  const updateImageField = (index: number, value: string) => {
    const updatedImages = [...newBake.images]
    updatedImages[index] = value
    setNewBake({ ...newBake, images: updatedImages })
  }

  const removeImageField = (index: number) => {
    if (newBake.images.length > 1) {
      const updatedImages = newBake.images.filter((_, i) => i !== index)
      setNewBake({ ...newBake, images: updatedImages })
    }
  }

  const handleEditBake = (bake: Bake) => {
    setEditingBake({ ...bake, images: [...bake.images] })
    setIsEditOpen(true)
    setSelectedBake(null)
  }

  const handleSaveEdit = () => {
    if (editingBake && editingBake.name && editingBake.description) {
      const validImages = editingBake.images.filter(img => img.trim() !== "")
      setBakes(bakes.map(b => 
        b.id === editingBake.id 
          ? { ...editingBake, images: validImages.length > 0 ? validImages : [DEFAULT_BAKE_IMAGE] }
          : b
      ))
      setEditingBake(null)
      setIsEditOpen(false)
    }
  }

  const addEditImageField = () => {
    if (editingBake) {
      setEditingBake({ ...editingBake, images: [...editingBake.images, ""] })
    }
  }

  const updateEditImageField = (index: number, value: string) => {
    if (editingBake) {
      const updatedImages = [...editingBake.images]
      updatedImages[index] = value
      setEditingBake({ ...editingBake, images: updatedImages })
    }
  }

  const removeEditImageField = (index: number) => {
    if (editingBake && editingBake.images.length > 1) {
      const updatedImages = editingBake.images.filter((_, i) => i !== index)
      setEditingBake({ ...editingBake, images: updatedImages })
    }
  }

  return (
    <section id="bakes" className="py-20 border-t border-border/50 bg-secondary/40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Fresh from the Oven
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-foreground">
              My Bakes
            </h2>
          </div>
          
          {isAdmin && (
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="gap-2 border-foreground/20 hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  Add New Bake
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-card max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-xl font-light">Add a New Creation</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div>
                    <label className="text-xs text-muted-foreground mb-2 block">Name</label>
                    <Input
                      placeholder="e.g., Sourdough Loaf"
                      value={newBake.name}
                      onChange={(e) => setNewBake({ ...newBake, name: e.target.value })}
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-2 block">Description</label>
                    <Textarea
                      placeholder="Tell us about this bake..."
                      value={newBake.description}
                      onChange={(e) => setNewBake({ ...newBake, description: e.target.value })}
                      className="bg-background border-border min-h-[100px]"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-2 block">Image URLs</label>
                    <div className="space-y-2">
                      {newBake.images.map((img, index) => (
                        <div key={index} className="flex gap-2">
                          <Input
                            placeholder="https://..."
                            value={img}
                            onChange={(e) => updateImageField(index, e.target.value)}
                            className="bg-background border-border flex-1"
                          />
                          {newBake.images.length > 1 && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={() => removeImageField(index)}
                              className="shrink-0"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={addImageField}
                      className="mt-2 text-muted-foreground"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add another image
                    </Button>
                  </div>
                  <Button 
                    onClick={handleAddBake} 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Add to Gallery
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>

        {bakes.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-border rounded-lg">
            <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground text-base">No bakes yet</p>
            <p className="text-muted-foreground/70 text-xs mt-1">Add your first creation to get started</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bakes.map((bake) => (
              <BakeCard 
                key={bake.id} 
                bake={bake} 
                isAdmin={isAdmin}
                isSelected={selectedBake?.id === bake.id}
                onSelect={() => setSelectedBake(bake)}
                onClose={() => setSelectedBake(null)}
                onDelete={() => handleDeleteBake(bake.id)}
                onEdit={() => handleEditBake(bake)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="sm:max-w-md bg-card max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-light">Edit Bake</DialogTitle>
          </DialogHeader>
          {editingBake && (
            <div className="space-y-4 pt-4">
              <div>
                <label className="text-xs text-muted-foreground mb-2 block">Name</label>
                <Input
                  placeholder="e.g., Sourdough Loaf"
                  value={editingBake.name}
                  onChange={(e) => setEditingBake({ ...editingBake, name: e.target.value })}
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-2 block">Description</label>
                <Textarea
                  placeholder="Tell us about this bake..."
                  value={editingBake.description}
                  onChange={(e) => setEditingBake({ ...editingBake, description: e.target.value })}
                  className="bg-background border-border min-h-[100px]"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-2 block">Image URLs</label>
                <div className="space-y-2">
                  {editingBake.images.map((img, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        placeholder="https://..."
                        value={img}
                        onChange={(e) => updateEditImageField(index, e.target.value)}
                        className="bg-background border-border flex-1"
                      />
                      {editingBake.images.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removeEditImageField(index)}
                          className="shrink-0"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={addEditImageField}
                  className="mt-2 text-muted-foreground"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add another image
                </Button>
              </div>
              <Button 
                onClick={handleSaveEdit} 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Save Changes
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

interface BakeCardProps {
  bake: Bake
  isAdmin: boolean
  isSelected: boolean
  onSelect: () => void
  onClose: () => void
  onDelete: () => void
  onEdit: () => void
}

function BakeCard({ bake, isAdmin, isSelected, onSelect, onClose, onDelete, onEdit }: BakeCardProps) {
  return (
    <Dialog open={isSelected} onOpenChange={(open) => !open && onClose()}>
      <article className="group">
        <div className="aspect-square overflow-hidden rounded-sm mb-5 bg-muted relative">
          {bake.images.length > 1 ? (
            <CardCarousel images={bake.images} name={bake.name} />
          ) : (
            <div className="cursor-pointer h-full" onClick={onSelect}>
              <img
                src={bake.images[0]}
                alt={bake.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          )}
        </div>
        <div className="cursor-pointer" onClick={onSelect}>
          <h3 className="text-lg font-medium text-foreground group-hover:text-muted-foreground transition-colors">
            {bake.name}
          </h3>
        </div>
      </article>
      <DialogContent className="sm:max-w-2xl bg-card p-0 overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="aspect-square md:aspect-auto relative">
            {bake.images.length > 1 ? (
              <ModalCarousel images={bake.images} name={bake.name} />
            ) : (
              <img
                src={bake.images[0]}
                alt={bake.name}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="p-6 md:p-8 flex flex-col">
            <DialogHeader>
              <DialogTitle className="text-xl md:text-2xl font-light">{bake.name}</DialogTitle>
            </DialogHeader>
            {isAdmin && (
              <div className="mt-6 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onEdit}
                  className="border-foreground/20"
                >
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onDelete}
                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                  <X className="h-4 w-4 mr-2" />
                  Remove
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function CardCarousel({ images, name }: { images: string[]; name: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollPrev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    emblaApi?.scrollPrev()
  }, [emblaApi])
  
  const scrollNext = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    emblaApi?.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrentIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative h-full group/carousel">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((img, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 h-full">
              <img
                src={img}
                alt={`${name} - ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 transition-all opacity-0 group-hover/carousel:opacity-100"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 transition-all opacity-0 group-hover/carousel:opacity-100"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, index) => (
          <div 
            key={index} 
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              index === currentIndex ? "bg-foreground" : "bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function ModalCarousel({ images, name }: { images: string[]; name: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])
  
  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrentIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative h-full">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((img, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 h-full">
              <img
                src={img}
                alt={`${name} - ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 transition-colors"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, index) => (
          <div 
            key={index} 
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              index === currentIndex ? "bg-background" : "bg-background/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
